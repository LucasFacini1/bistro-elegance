import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useReservationStore } from '../store/useStore';
import { Reservation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReservationForm {
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests: string;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { addReservation } = useReservationStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ReservationForm>();

  const selectedDate = watch('date');
  const selectedTime = watch('time');

  // Gerar horários disponíveis
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Gerar datas disponíveis (próximos 30 dias)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Não permitir reservas para domingos (se necessário)
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  const onSubmit = async (data: ReservationForm) => {
    setIsSubmitting(true);
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newReservation: Reservation = {
        id: Date.now().toString(),
        ...data,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      addReservation(newReservation);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        reset();
        setIsSuccess(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Erro ao fazer reserva:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">
                Fazer Reserva
              </h2>
              <p className="text-gray-600 mt-1">
                Reserve sua mesa para uma experiência inesquecível
              </p>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-500" />
            </motion.button>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Reserva Confirmada!
                </h3>
                <p className="text-gray-600">
                  Enviamos um email de confirmação para você.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          {!isSuccess && (
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo
                  </label>
                  <input
                    {...register('customerName', { required: 'Nome é obrigatório' })}
                    className="input-field"
                    placeholder="Seu nome completo"
                  />
                  {errors.customerName && (
                    <p className="text-red-500 text-sm mt-1">{errors.customerName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefone
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Telefone é obrigatório',
                      pattern: {
                        value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                        message: 'Formato inválido'
                      }
                    })}
                    className="input-field"
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  {...register('email', { 
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  type="email"
                  className="input-field"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data
                  </label>
                  <select
                    {...register('date', { required: 'Data é obrigatória' })}
                    className="input-field"
                  >
                    <option value="">Selecione uma data</option>
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('pt-BR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </option>
                    ))}
                  </select>
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Horário
                  </label>
                  <select
                    {...register('time', { required: 'Horário é obrigatório' })}
                    className="input-field"
                    disabled={!selectedDate}
                  >
                    <option value="">Selecione um horário</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Pessoas
                  </label>
                  <select
                    {...register('partySize', { 
                      required: 'Número de pessoas é obrigatório',
                      min: { value: 1, message: 'Mínimo 1 pessoa' },
                      max: { value: 12, message: 'Máximo 12 pessoas' }
                    })}
                    className="input-field"
                  >
                    <option value="">Quantas pessoas?</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                  {errors.partySize && (
                    <p className="text-red-500 text-sm mt-1">{errors.partySize.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pedidos Especiais (Opcional)
                </label>
                <textarea
                  {...register('specialRequests')}
                  rows={3}
                  className="input-field"
                  placeholder="Alguma solicitação especial? (alergias, aniversário, etc.)"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Confirmando reserva...</span>
                  </div>
                ) : (
                  'Confirmar Reserva'
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReservationModal;

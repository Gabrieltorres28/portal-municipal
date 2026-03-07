'use client';

import { X, AlertCircle, Upload, Send } from 'lucide-react';
import { useState } from 'react';

interface ReclamosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReclamosModal({ isOpen, onClose }: ReclamosModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    telefono: '',
    barrio: '',
    tipoReclamo: '',
    descripcion: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reclamo enviado exitosamente. En producción, esto se enviaría al backend.');
    onClose();
    setFormData({ nombre: '', dni: '', telefono: '', barrio: '', tipoReclamo: '', descripcion: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <AlertCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-900">
                Reclamos vecinales
              </h3>
              <p className="text-sm text-gray-600">
                Informá problemas en servicios municipales
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre y apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
              placeholder="Juan Pérez"
            />
          </div>

          {/* DNI y Teléfono */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                DNI <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.dni}
                onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                placeholder="12345678"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                placeholder="3764 123456"
              />
            </div>
          </div>

          {/* Barrio */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Barrio / Zona <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.barrio}
              onChange={(e) => setFormData({ ...formData, barrio: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
              placeholder="Centro, Barrio Norte, etc."
            />
          </div>

          {/* Tipo de reclamo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de reclamo <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.tipoReclamo}
              onChange={(e) => setFormData({ ...formData, tipoReclamo: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white"
            >
              <option value="">Seleccioná una opción</option>
              <option value="alumbrado">Alumbrado público</option>
              <option value="calles">Calles y veredas</option>
              <option value="residuos">Recolección de residuos</option>
              <option value="agua">Agua potable</option>
              <option value="limpieza">Limpieza de espacios públicos</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descripción del reclamo <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
              placeholder="Describí el problema con el mayor detalle posible..."
            />
          </div>

          {/* Adjuntar imagen (mock) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Adjuntar imagen (opcional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-400 transition-colors cursor-pointer">
              <Upload className="mx-auto text-gray-400 mb-3" size={32} />
              <p className="text-sm text-gray-600 mb-1">
                Hacé clic para adjuntar una imagen
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG hasta 5MB
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Enviar reclamo</span>
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

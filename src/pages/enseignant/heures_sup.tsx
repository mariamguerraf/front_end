import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Upload, Calendar, User, AlertCircle, Clock, X, Send } from 'lucide-react';

const HeuresSup = () => {
  const [formData, setFormData] = useState({
	typeAttestation: '',
	motif: '',
	dateDebut: '',
	dateFin: '',
	observations: ''
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
	const { name, value } = e.target;
	setFormData(prev => ({
	  ...prev,
	  [name]: value
	}));
  };

  const handleSubmit = (e) => {
	e.preventDefault();
	console.log('Demande d\'heures supplémentaires soumise:', formData);
	console.log('Fichiers attachés:', selectedFiles);
	alert('Demande d\'heures supplémentaires soumise avec succès !');
  };

  const handleFileSelect = () => {
	const input = document.createElement('input');
	input.type = 'file';
	input.multiple = true;
	input.accept = '.pdf,.jpg,.jpeg,.png';
	input.onchange = (e) => {
	  const files = Array.from((e.target as HTMLInputElement).files || []);
	  const validFiles = files.filter(file => file.size <= 5 * 1024 * 1024); // 5MB max
	  if (validFiles.length !== files.length) {
		alert('Certains fichiers sont trop volumineux (max 5MB)');
	  }
	  setSelectedFiles(prev => [...prev, ...validFiles]);
	};
	input.click();
  };

  const handleCancel = () => {
	navigate('/enseignant/demandes');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
	<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
	  {/* Header avec dégradé moderne */}
	  <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-6 py-6 shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Système de Gestion</h1>
            <nav className="ml-8 flex space-x-1">
              <Link to="/enseignant/profil" className="px-6 py-3 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm hover:underline">Profil</Link>
              <Link to="/enseignant/demandes" className="px-6 py-3 bg-white bg-opacity-20 rounded-xl border-b-2 border-yellow-300 backdrop-blur-sm font-medium hover:underline">Demandes</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-white bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Bienvenue, Enseignant</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 bg-opacity-20 border border-red-300 border-opacity-30 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

	  {/* Main Content */}
	  <main className="container mx-auto px-6 py-8">
		<div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
		  {/* Header du formulaire */}
		  <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
			<div className="flex items-center space-x-4">
			  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
				<FileText className="w-6 h-6 text-white" />
			  </div>
			  <div>
				<h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
				  Autorisation d'Heures Supplémentaires
				</h2>
				<p className="text-gray-600 mt-1">Demandez l'autorisation pour effectuer des heures supplémentaires</p>
			  </div>
			</div>
		  </div>

		  <div className="p-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
			  {/* Informations du demandeur */}
			  <div className="space-y-6">
				<div className="flex items-center space-x-3 mb-6">
				  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
					<User className="w-4 h-4 text-white" />
				  </div>
				  <h3 className="text-xl font-bold text-gray-800">Informations du Demandeur</h3>
				</div>

				<div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 shadow-sm">
				  <div className="grid grid-cols-1 gap-4">
					<div className="flex justify-between items-center py-2 border-b border-gray-200">
					  <span className="font-semibold text-gray-600">Nom complet:</span>
					  <span className="text-gray-800 font-medium">Martin Jean</span>
					</div>
					<div className="flex justify-between items-center py-2 border-b border-gray-200">
					  <span className="font-semibold text-gray-600">Type:</span>
					  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Professeur</span>
					</div>
					<div className="flex justify-between items-center py-2">
					  <span className="font-semibold text-gray-600">Département:</span>
					  <span className="text-gray-800 font-medium">Informatique</span>
					</div>
				  </div>
				</div>
			  </div>

			  {/* Détails de la demande */}
			  <div className="space-y-6">
					<div className="flex items-center space-x-3 mb-6">
					  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-600 rounded-lg flex items-center justify-center">
						<Calendar className="w-4 h-4 text-white" />
					  </div>
				  <h3 className="text-xl font-bold text-gray-800">Période Demandée</h3>
				</div>

				<div className="space-y-4">
				  <div className="grid grid-cols-2 gap-4">
					<div>
					  <label className="block text-sm font-semibold text-gray-700 mb-2">
						Date de début
					  </label>
					  <input
						type="date"
						name="dateDebut"
						value={formData.dateDebut}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
					  />
					</div>

					<div>
					  <label className="block text-sm font-semibold text-gray-700 mb-2">
						Date de fin
					  </label>
					  <input
						type="date"
						name="dateFin"
						value={formData.dateFin}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
					  />
					</div>
				  </div>

				  <div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
					  Observations (optionnel)
					</label>
					<textarea
					  name="observations"
					  value={formData.observations}
					  onChange={handleInputChange}
					  rows={4}
					  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none shadow-sm"
					  placeholder="Observations ou informations complémentaires..."
					/>
				  </div>
				</div>
			  </div>
			</div>

			{/* Upload de documents */}
			<div className="mt-8">
			  <div className="flex items-center space-x-3 mb-6">
				<div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
				  <FileText className="w-4 h-4 text-white" />
				</div>
				<h3 className="text-xl font-bold text-gray-800">Documents Justificatifs</h3>
			  </div>

			  <div className="border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-purple-40 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-100 transition-all duration-200">
				<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
				  <Upload className="w-8 h-8 text-white" />
				</div>
				<p className="text-gray-700 font-medium mb-2">Glissez-déposez vos fichiers ici ou</p>
				<button
				  type="button"
				  onClick={handleFileSelect}
				  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg transform hover:scale-105"
				>
				  Parcourir les fichiers
				</button>
				<p className="text-sm text-gray-500 mt-3">PDF, JPG, PNG jusqu'à 5MB</p>
			  </div>
			</div>

			{/* Note d'information colorée */}
			<div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
			  <div className="flex items-start space-x-4">
				<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
				  <AlertCircle className="w-5 h-5 text-white" />
				</div>
				<div className="text-blue-800">
				  <h4 className="font-bold text-lg mb-2">Information importante</h4>
				  <p className="leading-relaxed">
					Les demandes d'heures supplémentaires doivent être soumises <span className="font-semibold text-blue-900">avant</span> l'exécution des heures.
					L'approbation est requise pour la validation de votre rémunération supplémentaire.
				  </p>
				</div>
			  </div>
			</div>

			{/* Boutons d'action stylisés */}
			<div className="mt-10 flex justify-end space-x-4">
			  <button
				type="button"
				onClick={handleCancel}
				className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium flex items-center space-x-2 shadow-sm"
			  >
				<X className="w-4 h-4" />
				<span>Annuler</span>
			  </button>
			  <button
				type="button"
				onClick={handleSubmit}
				className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium flex items-center space-x-2 shadow-lg transform hover:scale-105"
			  >
				<Send className="w-4 h-4" />
				<span>Soumettre la Demande</span>
			  </button>
			</div>
		  </div>
		</div>
	  </main>
	</div>
  );
};

export default HeuresSup;
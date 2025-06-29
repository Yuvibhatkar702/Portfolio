import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CertificateView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    axios.get(`https://yuvistack.onrender.com/api/certifications/${id}`)
      .then(res => setCertificate(res.data))
      .catch(err => {
        console.error('Error fetching certificate:', err);
        setCertificate(null);
      });
  }, [id]);

  if (!certificate) {
    return <div className="text-center text-white p-10">Loading or certificate not found...</div>;
  }

  const isPDF = certificate.link?.toLowerCase().endsWith('.pdf');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-indigo-400 hover:underline text-sm"
      >
        ← Back to Certifications
      </button>

      <h1 className="text-2xl font-bold mb-1 text-center">{certificate.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{certificate.provider}</p>

      {isPDF ? (
        <iframe
          src={certificate.link}
          title={certificate.title}
          className="w-full max-w-5xl h-[80vh] border rounded"
        />
      ) : (
        <img
          src={certificate.link}
          alt={certificate.title}
          className="max-w-4xl max-h-[80vh] object-contain rounded shadow"
        />
      )}
    </div>
  );
};

export default CertificateView;

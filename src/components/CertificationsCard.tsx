"use client";
import React from "react";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  provider: string;
}

const CertificationsCard = () => {
  const certifications: Certification[] = [
    {
      title: "Huawei Developer Expert",
      provider: "Huawei",
    },
    {
      title: "Generative AI Leader",
      provider: "Google",
    },
    {
      title: "Software Engineering",
      provider: "TestDome",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
            <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
          </div>
          <h2 className="text-xl font-bold">Recent Certifications</h2>
        </div>
        <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1">
          View All
          <ExternalLink size={14} />
        </button>
      </div>

      {/* Certifications List */}
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {cert.provider}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsCard;
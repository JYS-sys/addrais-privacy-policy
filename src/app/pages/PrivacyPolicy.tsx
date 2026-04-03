import * as React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-lg z-50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-black mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">
          Last updated: April 03, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            This Privacy Policy describes how ADDRAIS ("we", "our", or "us") collects, uses, and protects your information when you use our application and services.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect personal information that you provide directly, including:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Contact data (including notes and information you add to contacts)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may also collect usage data such as:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>App interactions</li>
            <li>Device information</li>
            <li>Analytics data</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            This helps us improve our services and user experience.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Provide and maintain our services</li>
            <li>Improve user experience and product performance</li>
            <li>Communicate with you regarding updates or support</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Use of AI Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use third-party artificial intelligence services to provide certain features within the app, such as contact organization and intelligent tagging. These services may process your data to enhance these features.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you use AI-powered features, the following data may be securely transmitted to our AI service provider:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Contact notes or user-added content</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            This data is sent to <strong>OpenAI</strong> for the purpose of:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Automatically organizing and tagging contacts</li>
            <li>Improving categorization and search</li>
            <li>Enhancing user experience through intelligent suggestions</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            We only send the minimum amount of data necessary to perform these functions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not use your data to train AI models.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            User Consent for AI Processing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We only share your data with third-party AI services after obtaining your explicit consent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before any data is transmitted:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>You are clearly informed about what data will be shared</li>
            <li>You are informed that the data will be sent to OpenAI</li>
            <li>You are asked to provide your consent</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can choose not to enable AI-powered features, and you may withdraw your consent at any time within the app.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Contact Data Usage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We only access your contacts after you grant permission through your device.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not automatically upload your entire contact list.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Only contacts that you explicitly interact with (for example, when adding notes or using AI-powered features) may be processed.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We may share limited data with trusted third-party service providers strictly as necessary to operate our services, including:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>OpenAI – for AI-powered contact tagging and analysis</li>
            <li>Vercel – for hosting and infrastructure</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            All third-party providers are required to implement appropriate data protection and security measures.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Hosting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our services are hosted by Vercel. By using ADDRAIS, you acknowledge that your data may be processed and stored on secure servers provided by Vercel.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We retain personal data only for as long as necessary to provide our services.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Data processed through AI services is not stored by us beyond what is required for functionality.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can exercise these rights by contacting us.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Email: <a href="mailto:tech@addrais.ai" className="text-black font-medium hover:underline">tech@addrais.ai</a>
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Legal Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Developer: Mr Jean Yves SALLERON
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Address: Rue Judes Turiaf, 97221 CARBET
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </div>
      </main>
    </div>
  );
}
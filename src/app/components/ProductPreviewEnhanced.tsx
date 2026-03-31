import { motion } from 'motion/react';
const contactsScreen = 'https://placehold.co/390x844/f3f4f6/111827?text=Contacts+Screen';
const newContactScreen = 'https://placehold.co/390x844/f3f4f6/111827?text=New+Contact+Screen';
const profileScreen = 'https://placehold.co/390x844/f3f4f6/111827?text=Profile+Screen';

export function ProductPreviewEnhanced() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-16 tracking-tight text-center">
            The intelligent contact book
          </h2>
        </motion.div>

        {/* iPhone Mockups */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Phone 1 - Contacts list avec recherche AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-72 h-[580px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10" />
              
              <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[3rem] overflow-hidden relative">
                <img 
                  src={contactsScreen} 
                  alt="ADDRAIS Contacts Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">
                Contacts with notes and search
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Search intelligently through your contacts with integrated AI assistant
              </p>
            </div>
          </motion.div>

          {/* Phone 2 - Création de contact AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-72 h-[580px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10" />
              
              <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[3rem] overflow-hidden relative">
                <img 
                  src={newContactScreen} 
                  alt="ADDRAIS New Contact AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">
                Voice to text contact creation
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Add contacts by speaking naturally, AI automatically extracts information
              </p>
            </div>
          </motion.div>

          {/* Phone 3 - Profil et paramètres */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-72 h-[580px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10" />
              
              <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[3rem] overflow-hidden relative">
                <img 
                  src={profileScreen} 
                  alt="ADDRAIS Profile Settings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">
                Account settings to manage your profile
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Manage your personal information and preferences effortlessly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
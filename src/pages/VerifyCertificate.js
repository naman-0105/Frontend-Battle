import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const VerifyCertificate = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  // Animation variants
  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: '0 0 0 2px rgba(108, 99, 255, 0.5)',
      transition: { duration: 0.3 }
    },
    blur: { 
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(108, 99, 255, 0.6)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 },
    disabled: { 
      scale: 1,
      opacity: 0.7,
      boxShadow: "none"
    }
  };

  const resultVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      height: 0
    },
    visible: { 
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  // Handle verification
  const handleVerify = (e) => {
    e.preventDefault();
    
    if (!certificateCode.trim()) {
      return;
    }
    
    setIsVerifying(true);
    setVerificationResult(null);
    
    // Simulate verification process
    setTimeout(() => {
      // For demo purposes, let's say any code starting with "CERT" is valid
      if (certificateCode.toUpperCase().startsWith('CERT')) {
        setVerificationResult({
          status: 'success',
          data: {
            certificateId: certificateCode.toUpperCase(),
            studentName: "Jane Doe",
            programName: "Advanced AI Development",
            issueDate: "June 15, 2023",
            expiryDate: "No Expiry",
            grade: "A+"
          }
        });
      } else {
        setVerificationResult({
          status: 'error',
          message: "Certificate not found. Please check the code and try again."
        });
      }
      
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Verify <span className="text-gradient">Certificate</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Enter your Intern ID to confirm its authenticity and view details.
              </motion.p>
            </div>
            
            <motion.div 
              className="bg-dark-light rounded-xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleVerify} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="certificate-code" className="block text-sm font-medium text-gray-300">
                    Intern ID
                  </label>
                  <motion.div
                    initial="blur"
                    whileFocus="focus"
                    animate={isVerifying ? "disabled" : "blur"}
                    variants={inputVariants}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="certificate-code"
                      className="w-full px-4 py-3 bg-dark border border-dark-lighter rounded-md text-white focus:outline-none"
                      placeholder="e.g., INTERN-1234-ABCD"
                      value={certificateCode}
                      onChange={(e) => setCertificateCode(e.target.value)}
                      disabled={isVerifying}
                    />
                    {certificateCode && (
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        onClick={() => setCertificateCode('')}
                        disabled={isVerifying}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </motion.div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md font-medium"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={isVerifying ? "disabled" : "hover"}
                  whileTap={isVerifying ? "disabled" : "tap"}
                  animate={isVerifying ? "disabled" : "initial"}
                  disabled={isVerifying || !certificateCode.trim()}
                >
                  {isVerifying ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "Verify Certificate"
                  )}
                </motion.button>
              </form>
              
              {/* Verification Result */}
              <motion.div
                initial="hidden"
                animate={verificationResult ? "visible" : "hidden"}
                variants={resultVariants}
                className="mt-8"
              >
                {verificationResult?.status === 'success' && (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-xl font-display font-semibold text-white">Certificate Verified</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                      <div>
                        <p className="text-sm text-gray-400">Certificate ID</p>
                        <p className="font-medium">{verificationResult.data.certificateId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Student Name</p>
                        <p className="font-medium">{verificationResult.data.studentName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Program</p>
                        <p className="font-medium">{verificationResult.data.programName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Grade</p>
                        <p className="font-medium">{verificationResult.data.grade}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Issue Date</p>
                        <p className="font-medium">{verificationResult.data.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Expiry Date</p>
                        <p className="font-medium">{verificationResult.data.expiryDate}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <motion.button
                        className="text-primary hover:text-primary-light font-medium flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Certificate</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                )}
                
                {verificationResult?.status === 'error' && (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-xl font-display font-semibold text-white">Verification Failed</h3>
                    </div>
                    <p className="text-gray-300">{verificationResult.message}</p>
                    <div className="mt-6">
                      <p className="text-gray-400 text-sm">If you believe this is an error, please contact our support team for assistance.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-12 bg-dark-lighter rounded-xl p-6 text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg font-display font-semibold text-white mb-4">About Certificate Verification</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Each certificate contains a unique verification code found in the bottom right corner.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Our certificates use blockchain technology to ensure they cannot be tampered with.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>For security purposes, certificate verification is logged and monitored.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default VerifyCertificate;
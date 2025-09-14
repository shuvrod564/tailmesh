"use client";

import { useState, useRef } from 'react';

export default function ComponentShowcase() {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const componentCode = `"use client";

import { useState, useRef } from 'react';

export default function ComponentShowcase() {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Component Preview with Code Copy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Preview the component, view the code, and copy it directly to your clipboard.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Preview Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Component Preview
              </h2>
              <div className="border rounded-lg p-4 bg-slate-50">
                {/* This is the actual component preview */}
                <div className="min-h-[400px] flex items-center justify-center p-4">
                  <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                      <h1 className="text-2xl font-bold text-slate-800 mb-2">
                        A Collection of Components Built With Shadcn & Tailwind
                      </h1>
                      <p className="text-slate-600">
                        Finely crafted components built with React, Tailwind and Shadcn UI.
                      </p>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold text-slate-800 mb-2">
                          Discover all components
                        </h2>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-amber-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-slate-700 text-sm font-medium">5.0</span>
                        </div>
                        <p className="text-slate-600 text-sm">from 200+ reviews</p>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">
                          Browse Components
                        </button>
                        <button className="flex-1 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium">
                          View on GitHub
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="lg:w-1/2">
            <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
                <h2 className="text-lg font-semibold text-slate-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Code View
                </h2>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-300 text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-[500px]">
                <pre className="text-sm text-slate-200">
                  <code ref={codeRef} className="language-jsx">
                    {componentCode}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Usage Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Click the &quot;Copy Code&quot; button to copy the component code</li>
                <li>Paste it into your Next.js project</li>
                <li>Make sure you have Tailwind CSS properly configured</li>
                <li>Customize the component to fit your needs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Component Preview with Code Copy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Preview the component, view the code, and copy it directly to your clipboard.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Preview Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Component Preview
              </h2>
              <div className="border rounded-lg p-4 bg-slate-50">
                {/* This is the actual component preview */}
                <div className="min-h-[400px] flex items-center justify-center p-4">
                  <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                      <h1 className="text-2xl font-bold text-slate-800 mb-2">
                        A Collection of Components Built With Shadcn &amp; Tailwind
                      </h1>
                      <p className="text-slate-600">
                        Finely crafted components built with React, Tailwind and Shadcn UI.
                      </p>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold text-slate-800 mb-2">
                          Discover all components
                        </h2>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-amber-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 极 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.极-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-slate-700 text-sm font-medium">5.0</span>
                        </div>
                        <p className="text-slate-600 text-sm">from 200+ reviews</p>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 px极4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">
                          Browse Components
                        </button>
                        <button className="flex-1 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium">
                          View on GitHub
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="lg:w-1/2">
            <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
                <h2 className="text-lg font-semibold text-slate-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 极 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m极 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Code View
                </h2>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-300 text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2极2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-[500px]">
                <pre className="text-sm text-slate-200">
                  <code ref={codeRef} className="language-jsx">
                    {componentCode}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLine极="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 极z" />
                </svg>
                Usage Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Click the &quot;Copy Code&quot; button to copy the component code</li>
                <li>Paste it into your Next.js project</li>
                <li>Make sure you have Tailwind CSS properly configured</li>
                <li>Customize the component to fit your needs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
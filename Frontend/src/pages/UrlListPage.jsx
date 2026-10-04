import React, { useEffect, useState } from 'react';
import { deleteURL, listURL } from '../service/urlService';

export default function UserLinksDashboard() {
  // Mock data representing the user's saved links
  const [links, setLinks] = useState([]);
  
  useEffect(() => {
    async function getdata() {
      const getURL =await listURL();
      setLinks(getURL);
    }
    getdata();
    
  },[])

  // Handle deleting a link
  const handleDelete = (id) => {
    // In a real app, you wou ld make an API call to delete the link from your database here
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
    deleteURL(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Top Navigation / Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 tracking-tight">short.ly</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.href = '/shortener/'}
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            + New Link
          </button>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-8 max-w-6xl mx-auto w-full">
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">My Links</h2>
          <p className="text-gray-500 text-sm">Total links: {links.length}</p>
        </div>

        {/* Table Container (adds scroll on small screens) */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Short Link</th>
                  <th className="px-6 py-4 hidden sm:table-cell">Original URL</th>
                  <th className="px-6 py-4">Code</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {links.length > 0 ? (
                  links.map((link) => (
                    <tr key={link.id} className="hover:bg-gray-50 transition-colors">
                      
                      {/* Short Link */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a href={`http://localhost:8000/url/${link.code}`} className="text-blue-600 font-medium hover:underline">
                          {`http://localhost:8000/url/${link.code}`}
                        </a>
                      </td>
                      
                      {/* Original URL (Hidden on mobile, truncated to prevent table stretching) */}
                      <td className="px-6 py-4 hidden sm:table-cell max-w-xs">
                        <div className="truncate text-gray-500" title={link.originalUrl}>
                          {link.url}
                        </div>
                      </td>
                      
                      {/* code */}
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {link.code}
                      </td>
                      
                     
                      
                      {/* Actions (Delete Button) */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDelete(link.id)}
                          className="text-red-600 hover:text-red-900 transition-colors focus:outline-none"
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  /* Empty State */
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      You haven't created any links yet. 
                      <a href="/" className="text-blue-600 hover:underline ml-1">Create one now.</a>
                    </td>
                  </tr>
                )}
              </tbody>
              
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
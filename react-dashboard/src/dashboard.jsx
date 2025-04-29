  import Table from 'react-bootstrap/Table';
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  import 'bootstrap/dist/css/bootstrap.min.css';



  function StripedColumnsExample() {
    const [projects, setProjects] = useState([]);

    const EC2_IP = import.meta.env.VITE_EC2_IP;

    console.log(import.meta.env.VITE_EC2_IP);
    

    const fetchProjects = async () => {
      const res = await axios.get(`http://${EC2_IP}:4000/projects`);
      console.log(res.data);
      setProjects(res.data);
    };

    const restartProject = async (name) => {
      await axios.post(`http://${EC2_IP}:4000/projects/${name}/restart`);
      fetchProjects();
    };

    useEffect(() => {
      fetchProjects();
    }, []);

    return (
      <div className='wrapperdiv' style={{ 
        padding: '2rem',
        background: '#f8fafc',
        minHeight: '100vh',
        color: '#1e293b',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header with subtle gradient */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            position: 'relative'
          }}>
            <h1 style={{
              display: 'inline-block',
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              zIndex: '1'
            }}>
              ⚡ RebootDash
            </h1>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
              zIndex: '0'
            }}></div>
          </div>
      
          {/* Table Container */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            transition: 'all 0.3s ease'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              color: '#334155'
            }}>
              {/* Table Header */}
              <thead>
                <tr style={{
                  background: '#f1f5f9',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  <th style={{
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    letterSpacing: '0.3px',
                    color: '#475569'
                  }}> Process Name</th>
                  <th style={{
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    letterSpacing: '0.3px',
                    color: '#475569'
                  }}> Status</th>
                  <th style={{
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    letterSpacing: '0.3px',
                    color: '#475569'
                  }}> PID</th>
                  <th style={{
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    letterSpacing: '0.3px',
                    color: '#475569'
                  }}> Uptime</th>
                  <th style={{
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    letterSpacing: '0.3px',
                    color: '#475569'
                  }}>🔁 Restarter</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody>
                {projects.map((p, index) => (
                  <tr key={p.name} style={{
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      background: '#f8fafc'
                    }
                  }}>
                    {/* Process Name */}
                    <td style={{
                      padding: '1.2rem 1.5rem',
                      fontWeight: '500',
                      color: '#1e293b',
                      position: 'relative'
                    }}>
                      {p.name}
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '60%',
                        background: 'linear-gradient(to bottom, #3b82f6, #6366f1)',
                        borderRadius: '0 3px 3px 0',
                        opacity: '0',
                        transition: 'opacity 0.2s ease',
                        ':hover': {
                          opacity: '1'
                        }
                      }}></span>
                    </td>
                    
                    {/* Status */}
                    <td style={{ padding: '1.2rem 1.5rem' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        borderRadius: '50px',
                        padding: '0.3rem 0.8rem',
                        background: 
                          p.status === 'online' ? '#f0fdf4' :
                          p.status === 'errored' ? '#fffbeb' :
                          '#fef2f2',
                        border: 
                          p.status === 'online' ? '1px solid #bbf7d0' :
                          p.status === 'errored' ? '1px solid #fde68a' :
                          '1px solid #fecaca'
                      }}>
                        {p.status === 'online' ? (
                          <>
                            <div style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#10b981',
                              marginRight: '8px'
                            }}></div>
                            <span style={{ 
                              color: '#10b981',
                              fontWeight: '600',
                              fontSize: '0.85rem'
                            }}>Online</span>
                          </>
                        ) : p.status === 'errored' ? (
                          <>
                            <div style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#f59e0b',
                              marginRight: '8px'
                            }}></div>
                            <span style={{ 
                              color: '#f59e0b',
                              fontWeight: '600',
                              fontSize: '0.85rem'
                            }}>Errored</span>
                          </>
                        ) : (
                          <>
                            <div style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#ef4444',
                              marginRight: '8px'
                            }}></div>
                            <span style={{ 
                              color: '#ef4444',
                              fontWeight: '600',
                              fontSize: '0.85rem'
                            }}>Offline</span>
                          </>
                        )}
                      </div>
                    </td>
                    
                    {/* PID */}
                    <td style={{ 
                      padding: '1.2rem 1.5rem',
                      color: '#64748b',
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '0.9rem'
                    }}>
                      {p.pid}
                    </td>
                    
                    {/* Uptime */}
                    <td style={{ 
                      padding: '1.2rem 1.5rem',
                      color: '#64748b',
                      fontSize: '0.9rem'
                    }}>
                      {new Date(p.uptime).toLocaleString()}
                    </td>
                    
                    {/* Restart Button */}
                    <td style={{ padding: '1.2rem 1.5rem' }}>
                      <button
                        onClick={() => restartProject(p.name)}
                        style={{
                          background: 'transparent',
                          border: '1px solid #fcd34d',
                          color: '#d97706',
                          padding: '0.5rem 1rem',
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transition: 'all 0.3s ease',
                          ':hover': {
                            background: 'rgba(111, 255, 128, 0.05)',
                            boxShadow: '0 1px 3px rgba(232, 131, 131, 0.05)',
                            transform: 'translateY(-1px)'
                          }
                        }}
                      >
                        <span style={{
                          display: 'inline-block',
                          marginRight: '6px',
                          transition: 'transform 0.3s ease'
                        }}>
                          🔄
                        </span>
                        Restart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            color: '#94a3b8',
            fontSize: '0.8rem'
          }}>
            <p>System dashboard v1.0 • Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    
    );
  }

  export default StripedColumnsExample;

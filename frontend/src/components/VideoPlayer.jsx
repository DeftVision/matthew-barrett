import React from 'react';

export default function VideoPlayer({ src = '/videos/featured-home.mp4' }) {
    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <video
                    controls
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

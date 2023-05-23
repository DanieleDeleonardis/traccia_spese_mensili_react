import React from 'react'

export const SelezioneModuli = ({modulo, setModulo}) => {
    return (
        <div className='mt-4'>
            <span
                onClick={() => setModulo('transazioni')}
                className={`material-symbols-outlined border ${modulo === 'transazioni' ? 'text-bg border-secondary' : ''}`}
                style={{ fontSize: '30px', width: 'max-content' }} >
                database
            </span>
            <span
                onClick={() => setModulo('grafico')}
                className={`material-symbols-outlined ms-2 border ${modulo === 'grafico' ? 'text-bg border-secondary' : ''}`}
                style={{ fontSize: '30px', width: 'max-content' }}>
                monitoring
            </span>
        </div>
    )
}

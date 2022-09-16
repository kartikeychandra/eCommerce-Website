import React from 'react'

export default function Loading() {
    return (
        <div id="loading">
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

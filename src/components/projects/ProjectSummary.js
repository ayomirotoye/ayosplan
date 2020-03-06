import React from 'react';

export const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Neyt Ninja</p>
                <p className="grey-text">3rd september</p>
            </div>
        </div>
    )
}
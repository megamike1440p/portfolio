//ProfessionalHistory.js
import React, { useState } from 'react';
import ProfessionalModal from './ProfessionalModal';

const ProfessionalHistory = () => {
    const [isModalOpen, setIsModalOpen] = useState(null);

    const professionalDetails = {
        "Software Engineer at Current Luxury": {
            "Position": "Software Engineer",
            "Duration": "Jul 2024 – Present",
            "Responsibilities": [
                "Lead engineer for the Current Luxury App, a cross-platform smart home application that allows customers to connect, control, and automate luxury window coverings and IoT devices.",
                "Develop and maintain the mobile app in Flutter (Dart), including onboarding, grouping, scheduling, and automation features.",
                "Maintain and expand the backend services (JavaScript/TypeScript), ensuring secure device communication and integration with third-party services.",
                "Manage both relational (PostgreSQL) and legacy NoSQL (Firebase) databases, handling migrations, schema updates, and performance optimization.",
                "Develop and support integrations with Amazon Alexa and Google Home (JavaScript), enabling voice control of devices.",
                "Oversee AWS infrastructure including Elastic Beanstalk, EC2, RDS, S3, Route53, and Lambda for deployment, scaling, and system reliability."
            ]
        },
        "Work Center Supervisor on USS Princeton": {
            "Position": "Work Center Supervisor - Fire Control Systems/400 Hz Power Conversion",
            "Duration": "Spring 2018 - Spring 2019",
            "Responsibilities": [
                "Oversaw overall condition and operation of the Aegis MK99 Fire Control System and the MK84 60 Hz to 400 Hz Power Conversion System",
                "Scheduling of Planned Maintenance",
                "Delegation of responsibility to subordinate personnel",
                "Supervision of Planned and Corrective Maintenance",
                "Ordering of repair parts"
            ]
        },
        "Lead Technician on USS Princeton": {
            "Position": "Lead Technician - Fire Control Systems/400 Hz Power Conversion",
            "Duration": "Spring 2017 - Spring 2018",
            "Responsibilities": [
                "Troubleshooting and corrective maintenance of the Aegis MK99 Fire Control System and the MK84 60 Hz to 400 Hz Power Conversion System",
                "Identification and repair of faulty equipment",
                "Operation and repair of data conversion equipment, facilitating communication between the Aegis Local Area Network Computer System and legacy analog equipment"
            ]
        },
        "Maintenance Man on USS Princeton": {
            "Position": "Maintenance Man - Fire Control Systems/400 Hz Power Conversion",
            "Duration": "Summer 2014 - Spring 2017",
            "Responsibilities": [
                "Conducting Planned Maintenance on the MK 99 Fire Control System and the MK 84 60 Hz to 400 Hz Power Conversion System",
                "Assisting in troubleshooting and repair of equipment",
            ]
        }
    };

    return (
        <div className="container-custom text-center">
            <div className="mb-8">
            </div>
            {Object.keys(professionalDetails).map((job, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-0">{job}</h3>
                    <p className="text-lg mb-0">{professionalDetails[job].Position}</p>
                    <p className="text-sm text-gray-400 mb-0">{professionalDetails[job].Duration}</p>
                    <button
                        onClick={() => setIsModalOpen(job)}
                        className="modal-open-button mb-0"
                    >
                        View Responsibilities
                    </button>
                    {isModalOpen === job && (
                        <ProfessionalModal
                            job={job}
                            details={professionalDetails[job]}
                            onClose={() => setIsModalOpen(null)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProfessionalHistory;

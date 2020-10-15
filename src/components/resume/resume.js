import React from 'react';
import Job from './job/job';

import './resume.css';

const jobs=[
    {
        title: 'Belcan LLC',
        subtitle: 'Controls Engineer',
        startDate: 'May 2019',
        endDate: 'April 2020',
        skills: ['C++', 'C', 'NPSS', 'SCADE', 'DOORS','Synergy', 'Change', 'Python', 'Perl', 'Bash', 'Open-Loop Testing', 'Closed-Loop Testing', 'DO-178 Compliance', 'LDRA', 'x86 Assembly'],
        description: (
        <div className='job__body__description'>
            <strong><u>GE Aviation (Military):</u></strong>
            <br/>
            <p>Created and maintained a new Synergy database for the development of a classified military project. Documented new and existing software, and generated documentation for working on the project’s software. Worked to translate NPSS (C++ syntax) control software over to SCADE through a mix of new development and reusing software from an existing engine. Modification of communication buses and system timing code in C++ to reflect design changes. Developed a bash script for use in Synergy for reclassifying files for easier querying.</p>
            <strong><u>GE Aviation (Commercial):</u></strong>
            <br/>
            <p>Assisted with the Model Coverage Analysis of the GE9X control software in SCADE. Investigated gaps in logic coverage of both Open Loop Test Vectors and Close Loop Test Vectors. Created justifications for missing logic coverage in multiple software packages.</p>
            <strong><u>UTC Aerospace:</u></strong>
            <br/>
            <p>Provided Low Level Requirement testing in compliance with DO-178B using LDRA for P8-A’s Dry Bay Fire Protection System. Organized and ran the peer review of C and LDRA tests for the Low Level Requirement Team through the development process using Agile principles. Updated requirement documentation in IBM Rational DOORS, served as resolver for all Low Level Requirements in IBM Rational Change, created and maintained a Synergy repository for all Low Level Tests for the current software revision. Developed a C code injection process for testing volatile functions that previously crashed/froze development boards. Performed manual inspections of Assembly files for coverage analysis and justification. Create documentation for training new LDRA users for branch coverage analysis of C code. Present the low level testing procedure and demonstrate DO-178B compliance to Boeing shareholders during Technical Readiness Review (TRR).</p>
        </div>
        )
    }, 
    {
        title: 'Belcan LLC',
        subtitle: 'Controls Co-op',
        startDate: 'October 2018',
        endDate: 'May 2019',
        skills: ['C++', 'NPSS', 'DOORS', 'Change', 'Synergy', 'Python', 'Perl', 'Bash', 'Open-Loop Testing', 'Closed Loop Testing'], 
        description: (
            <p>Trained on IBM Rational DOORS, Synergy, and Change. Received training with SCADE, along with a heavy introduction into internal combustion engines. Provide basic testing using NPSS along with custom applications in one of our customers tool suites. Create basic utilities using Perl and Batch scripting.</p>
        )
    }, 
    {
        title: 'NASA Marshall Space Flight Center', 
        subtitle: 'Software Testing and Verification Intern', 
        startDate: 'May 2018',
        endDate: 'August 2018',
        skills: ['C++', 'Python', 'DOORS', 'Subversion', 'Black Box Testing', 'Event Based Testing', 'Wind River Simics', 'Wind River Workbench'],
        description: (<p>Update, modify, and document Design Level Requirement tests in C++ along with corresponding documentation, create new Design Level Requirement Tests as software becomes updated, create regression tests via Event Based Testing. Interact and modify Python based testing harness. Presented testing process and modifications to project burn down rate based off of performance to NASA engineers.</p>)
    }, 
    {
        title: 'Morehead State University',
        subtitle: 'Software Engineer', 
        startDate: 'August 2017',
        endDate: 'November 2018',
        skills: ['C++', 'C', 'cFS', 'Linux', 'Raspberry Pi', 'Project Yocto', 'ARM', 'Perl'],
        description: (
            <div className='job__body__description'>
            <strong><u>Depenable Multiprocessing (Software Lead):</u></strong>
            <br/>
            <p>Integrate OpenClovis into existing Dependable Multiprocessor software and hardware received from Honeywell, delegate tasks for reactivation of ISS flight computer from DM-7, plan and execute the activation of an ARM based branch of Dependable Multiprocessing software. Assist with necessary modifications to C code and Perl scripts.</p>
            <strong><u>Dependable Multiprocessing (Engineer):</u></strong>
            <br/>
            <p>Compile custom Linux images for Raspberry Pi devices for commercial Dependable Multiprocessor concept demonstration. Develop tools in C++ and bash to assist with building process and other tasks. Documents usage and create instructions for further uses of the Yocto Project</p>
            <strong><u>Lunar IceCube Satellite: </u></strong>
            <br/>
            <p>Develop testable code in NASA's core flight systems (cFS) framework for the C language, for usage within the flight computer of the Lunar IceCube satellite launching on EM-1.</p>
        </div>
        )
    }
]

const Resume = () => {
    return(
        <div className="resume">
            {jobs.map((job) => (
                <Job
                title={job.title}
                subtitle={job.subtitle}
                startDate={job.startDate}
                endDate={job.endDate}
                skills={job.skills}
                description={job.description}
            />
            ))}
            
        </div>
    )
}

export default Resume;
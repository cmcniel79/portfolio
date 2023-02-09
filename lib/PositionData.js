export default function getPositionData(beginDate, endDate) {
    return [
        {
            index: 0,
            tag: 'BA',
            company: 'Boeing',
            position: 'Flight Controls Engineer',
            start: new Date(2023, 1).getTime(),
            end: endDate,
            color: '#fd7480',
            description: [
                "Programmed a Model Predictive Control (MPC) Python module in the simulation software CARLA. \
              This MPC module was based on a purpose-built vehicle dynamics model, and successfully controlled the simulated vehicle.",
                "Also developed a non-linear global planner for race line optimization that was based on the same dynamics model."
            ]
        },
        {
            index: 1,
            tag: 'ROAR',
            company: 'Robotic Open Autonomous Racing',
            position: 'Graduate Capstone',
            start: new Date(2021, 8).getTime(),
            end: new Date(2022, 4).getTime(),
            color: '#EAB464',
            description: [
                "Programmed a Model Predictive Control (MPC) Python module in the simulation software CARLA. \
              This MPC module was based on a purpose-built vehicle dynamics model, and successfully controlled the simulated vehicle.",
                "Also developed a non-linear global planner for race line optimization that was based on the same dynamics model."
            ]
        },
        {
            index: 2,
            tag: 'AUR',
            company: 'Aurora',
            position: 'Hardware-In-The-Loop Intern',
            start: new Date(2021, 4).getTime(),
            end: new Date(2022, 4, 31).getTime(),
            color: '#8E8DB1',
            description: [
                "Assembled Hardware-In-The-Loop testing platforms, which were configured with full autonomous vehicle \
              electronics and sensors. Assisted in sensor initialization and configuration and wrote build instructions \
              for the electrical assembly.",
                "Assisted systems engineers in developing web dashboard tools for the vehicle fleet and deployed these \
              tools to existing HIL builds for testing."
            ]
        },
        {
            index: 3,
            tag: 'FTP',
            company: 'From The People',
            position: 'Co-Founder',
            start: new Date(2020, 3, 15).getTime(),
            end: new Date(2022, 7).getTime(),
            color: '#A64253',
            description: [
                "Co-founded From The People, a specialty online marketplace and consumer technology development company.\
               Responsible for all technical decisions for the company, including frontend and backend web development,\
                programming of automation scripts, and creating custom APIs and databases with AWS."
            ]
        },
        {
            index: 4,
            tag: 'ATA',
            company: 'Applied Technology Associates',
            position: 'Mechanical Engineer',
            start: new Date(2018, 10).getTime(),
            end: new Date(2020, 3, 5).getTime(),
            color: '#698BC9',
            description: [
                "Designed mechanical parts and systems, including space-flight components, optomechanical instruments, \
              and test fixtures. Selected vendors for mechanical designs, and assisted in assembly, integration, and testing of EDUs.",
                "Designed and assembled Fast Steering Mirrors (FSMs) across multiple programs. Design work included \
              running thermal and modal finite element analyses (FEA), as well as magnetic actuator modelling."
            ]
        },
        {
            index: 5,
            tag: 'CUA',
            company: 'CU Aerospace',
            position: 'Mechatronics Intern',
            start: beginDate,
            end: new Date(2018, 7).getTime(),
            color: '#76B668',
            description: [
                "Supported senior engineers in development of a new satellite electro-mechanical system. \
              Evaluated prototypes of the new system and its sensors in the research lab, \
              which required designing tests, embedded programming, and rapid prototyping of mechanical test fixtures.",
                "Wrote several control programs (PID) on Arduino microcontrollers to control motors in the prototype system."
            ]
        }
    ]
};
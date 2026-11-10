const auditItems = [
    // 1. ACCESS CONTROL & IDENTITY MANAGEMENT
    {
        id: 1,
        domain: "Access Control & Identity Management",
        title: "Multi-Factor Authentication",
        standard: "ISO/IEC 27001:2022 Annex A 8.5; NIST CSF 2.0 PR.AA",
        question: "Is multi-factor authentication enforced for remote access and privileged accounts?",
        actions: "Review authentication policies, inspect MFA configurations, and test remote and administrator account access.",
        risk: "High",
        urgency: "Immediate",
        justification: "A compromised password alone should not be sufficient to access critical company systems."
    },
    {
        id: 2,
        domain: "Access Control & Identity Management",
        title: "Unique User Identification",
        standard: "ISA/IEC 62443-3-3 SR 1.1; ISO/IEC 27001:2022 Annex A 5.16",
        question: "Does every employee and contractor use an individually assigned account when accessing company systems?",
        actions: "Review user account lists, identify shared accounts, and verify that user activities can be traced to individual identities.",
        risk: "High",
        urgency: "Immediate",
        justification: "Shared accounts make it difficult to identify the person responsible for unauthorized activities."
    },
    {
        id: 3,
        domain: "Access Control & Identity Management",
        title: "Role-Based Access Control",
        standard: "ISO/IEC 27001:2022 Annex A 5.15 and 5.18; NIST CSF 2.0 PR.AA",
        question: "Are user permissions assigned according to job responsibilities and the principle of least privilege?",
        actions: "Review role definitions, compare permissions with job responsibilities, and identify excessive access rights.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Excessive permissions increase the possibility of unauthorized access or accidental changes."
    },
    {
        id: 4,
        domain: "Access Control & Identity Management",
        title: "Access Review and Account Removal",
        standard: "ISO/IEC 27001:2022 Annex A 5.18",
        question: "Are access rights regularly reviewed and removed when employees leave or change roles?",
        actions: "Inspect access review records, sample terminated employees, and verify that outdated accounts and permissions are removed promptly.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Former employees or users with outdated permissions may retain unauthorized access to company systems."
    },

    // 2. NETWORK & INFRASTRUCTURE SECURITY
    {
        id: 5,
        domain: "Network & Infrastructure Security",
        title: "Network Segmentation",
        standard: "ISO/IEC 27001:2022 Annex A 8.22; ISA/IEC 62443-3-3 SR 5.1",
        question: "Are corporate IT networks, operational technology networks, and other sensitive network zones appropriately separated?",
        actions: "Review network diagrams, inspect VLAN and firewall configurations, and verify separation between IT and OT environments.",
        risk: "High",
        urgency: "Immediate",
        justification: "Poor segmentation can allow an attack on corporate systems to spread into critical industrial environments."
    },
    {
        id: 6,
        domain: "Network & Infrastructure Security",
        title: "Firewall Rules and Network Filtering",
        standard: "ISO/IEC 27001:2022 Annex A 8.20",
        question: "Are firewalls configured to allow only authorized network connections?",
        actions: "Inspect firewall rules, identify unnecessary open ports, review access restrictions, and verify periodic rule reviews.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Unrestricted network traffic can expose critical infrastructure to unauthorized connections."
    },
    {
        id: 7,
        domain: "Network & Infrastructure Security",
        title: "Secure Network Services",
        standard: "ISO/IEC 27001:2022 Annex A 8.21",
        question: "Are network services configured and monitored according to approved security requirements?",
        actions: "Review network service configurations, inspect service provider security requirements, and verify that insecure services are disabled.",
        risk: "Medium",
        urgency: "1–2 Weeks",
        justification: "Insecure network services may provide attackers with opportunities to access company systems."
    },
    {
        id: 8,
        domain: "Network & Infrastructure Security",
        title: "Wireless Network Security",
        standard: "ISO/IEC 27001:2022 Annex A 8.20 and 8.22; ISA/IEC 62443-3-3 SR 1.6",
        question: "Are wireless networks secured and separated from sensitive company and industrial networks?",
        actions: "Inspect wireless access point configurations, verify strong authentication and encryption, and identify unauthorized wireless devices.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Unsecured wireless connections can provide an entry point into internal networks."
    },

    // 3. INDUSTRIAL CONTROL SYSTEM (ICS) / OT SECURITY
    {
        id: 9,
        domain: "ICS / OT Security",
        title: "Industrial System Access Authorization",
        standard: "ISA/IEC 62443-3-3 SR 2.1",
        question: "Is access to industrial control systems restricted according to approved authorization rules?",
        actions: "Review SCADA, PLC, and engineering workstation permissions, inspect access policies, and test whether unauthorized users are blocked.",
        risk: "High",
        urgency: "Immediate",
        justification: "Unauthorized changes to industrial control systems could disrupt electricity generation or distribution."
    },
    {
        id: 10,
        domain: "ICS / OT Security",
        title: "Secure Communication Integrity",
        standard: "ISA/IEC 62443-3-3 SR 3.1",
        question: "Are communications between industrial control system components protected against unauthorized modification?",
        actions: "Review OT communication protocols, inspect integrity protection mechanisms, and verify protections for communications between critical devices.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Manipulated control messages could cause industrial equipment to operate incorrectly."
    },
    {
        id: 11,
        domain: "ICS / OT Security",
        title: "Malicious Code Protection",
        standard: "ISA/IEC 62443-3-3 SR 3.2",
        question: "Are appropriate protections implemented to prevent malicious code from affecting industrial control systems?",
        actions: "Review OT malware protection measures, inspect removable media procedures, and verify that security tools are suitable for operational environments.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Malware infections may interrupt industrial processes and affect the availability of electricity services."
    },
    {
        id: 12,
        domain: "ICS / OT Security",
        title: "OT Network Zone Protection",
        standard: "ISA/IEC 62443-3-3 SR 5.2",
        question: "Are boundaries between industrial network zones protected against unauthorized communication?",
        actions: "Review zone and conduit diagrams, inspect boundary firewalls, and verify that communication between zones is explicitly authorized.",
        risk: "High",
        urgency: "Immediate",
        justification: "Weak zone boundaries can allow threats to move between industrial systems and affect critical operations."
    },

    // 4. ASSET & VULNERABILITY MANAGEMENT
    {
        id: 13,
        domain: "Asset & Vulnerability Management",
        title: "Hardware and Software Asset Inventory",
        standard: "ISO/IEC 27001:2022 Annex A 5.9; NIST CSF 2.0 ID.AM",
        question: "Does the organization maintain an updated inventory of its hardware, software, and important technology assets?",
        actions: "Review asset registers, compare records with network discovery results, and identify assets without assigned owners.",
        risk: "Medium",
        urgency: "1–2 Weeks",
        justification: "Unknown or untracked assets may contain security weaknesses that the organization cannot properly manage."
    },
    {
        id: 14,
        domain: "Asset & Vulnerability Management",
        title: "Vulnerability Identification and Assessment",
        standard: "ISO/IEC 27001:2022 Annex A 8.8; NIST CSF 2.0 ID.RA",
        question: "Are technical vulnerabilities regularly identified, assessed, and prioritized according to risk?",
        actions: "Review vulnerability assessment reports, examine risk rankings, and verify that critical vulnerabilities have assigned owners.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Unidentified vulnerabilities may be exploited to gain access to important company systems."
    },
    {
        id: 15,
        domain: "Asset & Vulnerability Management",
        title: "Security Patch Management",
        standard: "ISO/IEC 27001:2022 Annex A 8.8; ISA/IEC 62443-2-3",
        question: "Are security patches evaluated and applied within defined timeframes?",
        actions: "Review patch management records, compare installed versions with approved updates, and inspect documented exceptions. For OT systems, verify that patches are tested and approved before deployment.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Unpatched systems may remain exposed to known vulnerabilities. Unplanned OT patching can also create operational risks."
    },
    {
        id: 16,
        domain: "Asset & Vulnerability Management",
        title: "Secure System Configuration",
        standard: "ISO/IEC 27001:2022 Annex A 8.9",
        question: "Are secure configuration standards established and maintained for servers, workstations, network devices, and industrial systems?",
        actions: "Review configuration baselines, inspect sample system settings, and identify unnecessary services, default accounts, or insecure configurations.",
        risk: "Medium",
        urgency: "1–2 Weeks",
        justification: "Incorrect configurations can create weaknesses that attackers may exploit."
    },

    // 5. INCIDENT RESPONSE & BUSINESS CONTINUITY
    {
        id: 17,
        domain: "Incident Response & Business Continuity",
        title: "Cybersecurity Incident Response Plan",
        standard: "ISO/IEC 27001:2022 Annex A 5.24; NIST CSF 2.0 RS.MA",
        question: "Does the organization maintain a documented cybersecurity incident response plan?",
        actions: "Review the incident response plan, verify assigned responsibilities, and check whether escalation procedures are documented.",
        risk: "High",
        urgency: "Immediate",
        justification: "Without a clear response plan, employees may not know how to respond to cyberattacks or operational disruptions."
    },
    {
        id: 18,
        domain: "Incident Response & Business Continuity",
        title: "Incident Detection and Reporting",
        standard: "ISO/IEC 27001:2022 Annex A 5.25 and 5.26; NIST CSF 2.0 DE.CM",
        question: "Are suspected cybersecurity incidents detected, reported, assessed, and escalated through defined procedures?",
        actions: "Review incident records, inspect reporting channels, and verify that incidents are assessed and escalated according to severity.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Delayed detection and reporting can allow cyberattacks to cause greater damage."
    },
    {
        id: 19,
        domain: "Incident Response & Business Continuity",
        title: "Backup and Recovery Testing",
        standard: "ISO/IEC 27001:2022 Annex A 8.13; NIST CSF 2.0 PR.DS",
        question: "Are critical systems and data backed up regularly, and are restoration procedures tested?",
        actions: "Inspect backup schedules, review backup protection, and examine evidence of restoration tests for critical systems.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Unusable or unavailable backups may prevent the organization from recovering after ransomware or system failure."
    },
    {
        id: 20,
        domain: "Incident Response & Business Continuity",
        title: "ICT Readiness for Business Continuity",
        standard: "ISO/IEC 27001:2022 Annex A 5.30",
        question: "Are information and communication technology systems prepared to meet the organization's business continuity requirements?",
        actions: "Review continuity plans, verify recovery objectives for critical systems, and inspect evidence of continuity exercises.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Failure to prepare critical technology systems for disruption can affect electricity services and business operations."
    },

    // 6. DATA PROTECTION & ENCRYPTION
    {
        id: 21,
        domain: "Data Protection & Encryption",
        title: "Encryption of Sensitive Data",
        standard: "ISO/IEC 27001:2022 Annex A 8.24; ISA/IEC 62443-3-3 SR 4.3",
        question: "Is sensitive company and operational information protected using appropriate encryption?",
        actions: "Review encryption policies, inspect encryption configurations, and verify protection of sensitive information at rest and in transit.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Encryption helps prevent unauthorized parties from reading sensitive information if it is exposed or intercepted."
    },
    {
        id: 22,
        domain: "Data Protection & Encryption",
        title: "Data Leakage Prevention",
        standard: "ISO/IEC 27001:2022 Annex A 8.12",
        question: "Are measures implemented to detect and prevent unauthorized disclosure or transfer of sensitive information?",
        actions: "Review data leakage prevention policies, inspect monitoring rules, and verify controls for email, removable media, and file transfers.",
        risk: "Medium",
        urgency: "1–2 Months",
        justification: "Uncontrolled data transfers can expose confidential business information and sensitive operational details."
    },
    {
        id: 23,
        domain: "Data Protection & Encryption",
        title: "Secure Data Deletion",
        standard: "ISO/IEC 27001:2022 Annex A 8.10",
        question: "Is information securely deleted when it is no longer required or when storage equipment is reused or disposed of?",
        actions: "Review data deletion procedures, inspect disposal records, and verify that storage media is sanitized before reuse or disposal.",
        risk: "Medium",
        urgency: "1–2 Months",
        justification: "Improper deletion may allow sensitive information to be recovered from old devices or storage media."
    },
    {
        id: 24,
        domain: "Data Protection & Encryption",
        title: "Cryptographic Key Management",
        standard: "ISO/IEC 27001:2022 Annex A 8.24",
        question: "Are cryptographic keys securely generated, stored, accessed, rotated, and revoked?",
        actions: "Review key management procedures, inspect key storage protections, and verify that access to cryptographic keys is restricted.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Compromised encryption keys may allow unauthorized parties to access protected information."
    },

   
    {
        id: 25,
        domain: "Vendor & Supply Chain Risk",
        title: "Supplier Security Assessment",
        standard: "ISO/IEC 27001:2022 Annex A 5.19",
        question: "Are suppliers assessed for cybersecurity risks before they are approved to provide products or services?",
        actions: "Review supplier assessment records, inspect security questionnaires, and verify that critical suppliers receive appropriate risk evaluations.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "A supplier with weak security practices may introduce risks into the company's systems and operations."
    },
    {
        id: 26,
        domain: "Vendor & Supply Chain Risk",
        title: "Security Requirements in Supplier Agreements",
        standard: "ISO/IEC 27001:2022 Annex A 5.20",
        question: "Do supplier contracts include appropriate cybersecurity requirements and responsibilities?",
        actions: "Review selected supplier contracts and verify requirements for confidentiality, incident reporting, access restrictions, and security responsibilities.",
        risk: "Medium",
        urgency: "1–2 Months",
        justification: "Without clear contractual requirements, suppliers may not be accountable for protecting company information and systems."
    },
    {
        id: 27,
        domain: "Vendor & Supply Chain Risk",
        title: "ICT Supply Chain Security",
        standard: "ISO/IEC 27001:2022 Annex A 5.21",
        question: "Are cybersecurity risks associated with ICT products, services, and technology suppliers identified and managed?",
        actions: "Review supply chain risk assessments, inspect security requirements for critical technology providers, and examine how supplier-related risks are recorded.",
        risk: "High",
        urgency: "1–2 Months",
        justification: "Compromised software, hardware, or supplier services may introduce vulnerabilities into critical infrastructure."
    },
    {
        id: 28,
        domain: "Vendor & Supply Chain Risk",
        title: "Supplier Security Monitoring",
        standard: "ISO/IEC 27001:2022 Annex A 5.22",
        question: "Are supplier security practices and service changes regularly monitored and reviewed?",
        actions: "Review supplier performance reports, inspect reassessment schedules, and verify that significant supplier changes are evaluated for security impact.",
        risk: "Medium",
        urgency: "1–3 Months",
        justification: "Supplier security can change over time, so an initial assessment alone may not be sufficient."
    },

   
    {
        id: 29,
        domain: "Physical Security",
        title: "Physical Security Perimeters",
        standard: "ISO/IEC 27001:2022 Annex A 7.1",
        question: "Are security perimeters established to protect sensitive facilities, server rooms, and power generation sites?",
        actions: "Inspect facility boundaries, review physical security layouts, and verify that sensitive areas have appropriate barriers and restricted entry points.",
        risk: "High",
        urgency: "Immediate",
        justification: "Unauthorized physical access can expose critical equipment and allow direct interference with operations."
    },
    {
        id: 30,
        domain: "Physical Security",
        title: "Physical Entry Controls",
        standard: "ISO/IEC 27001:2022 Annex A 7.2; NIST CSF 2.0 PR.AA",
        question: "Is physical access to restricted areas limited to authorized personnel?",
        actions: "Review access badge records, inspect visitor procedures, and verify that entry to server rooms and control rooms is restricted.",
        risk: "High",
        urgency: "Immediate",
        justification: "Unauthorized entry into sensitive facilities could lead to equipment damage, theft, or operational disruption."
    },
    {
        id: 31,
        domain: "Physical Security",
        title: "Physical Security Monitoring",
        standard: "ISO/IEC 27001:2022 Annex A 7.4",
        question: "Are sensitive facilities monitored to detect unauthorized physical access?",
        actions: "Inspect CCTV coverage, review alarm systems, and verify that monitoring records are retained and reviewed.",
        risk: "Medium",
        urgency: "1–2 Weeks",
        justification: "Insufficient monitoring may allow unauthorized physical activity to go undetected."
    },
    {
        id: 32,
        domain: "Physical Security",
        title: "Protection of Supporting Utilities",
        standard: "ISO/IEC 27001:2022 Annex A 7.11",
        question: "Are critical facilities protected against failures or disruptions involving power, cooling, and other supporting utilities?",
        actions: "Inspect UPS and backup power arrangements, review cooling system maintenance, and verify that supporting utility failures trigger appropriate alerts.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Failures in supporting utilities can interrupt critical IT equipment and affect operational availability."
    }
];


const savedItems = JSON.parse(
    localStorage.getItem("completedAuditItems") || "[]"
);

const validIds = new Set(auditItems.map(item => item.id));

const completedItems = new Set(
    savedItems.filter(id => validIds.has(Number(id))).map(Number)
);

let hideCompleted = false;
let selectedDomain = "All";
let selectedRisk = "All";


const main = document.querySelector("main");

main.innerHTML = `
    <h2>Cybersecurity Audit Dashboard</h2>
    <p>Monitor security controls, identify gaps, and prioritize remediation for Global Energy Solutions.</p>

    <section class="dashboard">
        <div class="stat-card">
            <h3>Total Controls</h3>
            <p id="total-count">0</p>
        </div>

        <div class="stat-card">
            <h3>Completed</h3>
            <p id="completed-count">0</p>
        </div>

        <div class="stat-card">
            <h3>Outstanding</h3>
            <p id="outstanding-count">0</p>
        </div>

        <div class="stat-card">
            <h3>High-Risk Gaps</h3>
            <p id="high-risk-count">0</p>
        </div>
    </section>

    <h3>Overall Progress</h3>

    <div class="progress-container">
        <div id="progress-bar"></div>
    </div>

    <p id="progress-text">0% completed</p>

    <section class="filters">
        <select id="domain-filter">
            <option value="All">All Domains</option>
        </select>

        <select id="risk-filter">
            <option value="All">All Risk Levels</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>
        </select>

        <button id="hide-button">Hide Completed: OFF</button>
    </section>

    <h2>Audit Checklist</h2>

    <div id="checklist"></div>
`;

const domainFilter = document.getElementById("domain-filter");
const riskFilter = document.getElementById("risk-filter");
const checklist = document.getElementById("checklist");

const domains = [...new Set(auditItems.map(item => item.domain))];

domains.forEach(domain => {
    const option = document.createElement("option");
    option.value = domain;
    option.textContent = domain;
    domainFilter.appendChild(option);
});


function updateDashboard() {
    const total = auditItems.length;

    const completed = auditItems.filter(
        item => completedItems.has(item.id)
    ).length;

    const outstanding = total - completed;

    const highRisk = auditItems.filter(
        item => item.risk === "High" &&
        !completedItems.has(item.id)
    ).length;

    document.getElementById("total-count").textContent = total;
    document.getElementById("completed-count").textContent = completed;
    document.getElementById("outstanding-count").textContent = outstanding;
    document.getElementById("high-risk-count").textContent = highRisk;

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.getElementById("progress-bar").style.width =
        percentage + "%";

    document.getElementById("progress-text").textContent =
        percentage + "% completed";
}


function renderChecklist() {
    checklist.innerHTML = "";

    const filteredItems = auditItems.filter(item => {
        const domainMatch =
            selectedDomain === "All" ||
            item.domain === selectedDomain;

        const riskMatch =
            selectedRisk === "All" ||
            item.risk === selectedRisk;

        const visibilityMatch =
            !hideCompleted ||
            !completedItems.has(item.id);

        return domainMatch && riskMatch && visibilityMatch;
    });

    if (filteredItems.length === 0) {
        checklist.textContent =
            "No checklist items match these filters.";
    }

    filteredItems.forEach(item => {
        const isCompleted = completedItems.has(item.id);

        const card = document.createElement("article");

        card.className =
            "audit-item" + (isCompleted ? " completed" : "");

        card.innerHTML = `
            <small>${item.domain}</small>

            <h3>${item.id}. ${item.title}</h3>

            <p><strong>Standard & Control:</strong>
                ${item.standard}
            </p>

            <p><strong>Audit Question:</strong>
                ${item.question}
            </p>

            <p><strong>Associated Action Items:</strong>
                ${item.actions}
            </p>

            <p><strong>Risk / Severity:</strong>
                <span class="risk-${item.risk.toLowerCase()}">
                    ${item.risk}
                </span>
            </p>

            <p><strong>Urgency:</strong>
                ${item.urgency}
            </p>

            <p><strong>Justification:</strong>
                ${item.justification}
            </p>

            <label>
                <input
                    type="checkbox"
                    class="completion-checkbox"
                    data-id="${item.id}"
                    ${isCompleted ? "checked" : ""}
                >
                Mark as completed
            </label>
        `;

        checklist.appendChild(card);
    });

    updateDashboard();
}


checklist.addEventListener("change", event => {
    if (!event.target.classList.contains("completion-checkbox")) {
        return;
    }

    const id = Number(event.target.dataset.id);

    if (event.target.checked) {
        completedItems.add(id);
    } else {
        completedItems.delete(id);
    }

    localStorage.setItem(
        "completedAuditItems",
        JSON.stringify([...completedItems])
    );

    renderChecklist();
});


domainFilter.addEventListener("change", event => {
    selectedDomain = event.target.value;
    renderChecklist();
});


riskFilter.addEventListener("change", event => {
    selectedRisk = event.target.value;
    renderChecklist();
});

document.getElementById("hide-button").addEventListener("click", () => {
    hideCompleted = !hideCompleted;

    document.getElementById("hide-button").textContent =
        `Hide Completed: ${hideCompleted ? "ON" : "OFF"}`;

    renderChecklist();
});

// Initial dashboard display
renderChecklist();

const auditItems = [
    {
        id: 1,
        domain: "Access Control & Identity Management",
        title: "Multi-Factor Authentication",
        standard: "ISO/IEC 27001:2022 Annex A 8.5; NIST CSF 2.0 PR.AA",
        question: "Does the organization enforce MFA for remote access and privileged accounts?",
        actions: "Review authentication policies, inspect MFA configurations, and test remote and administrator access.",
        risk: "High",
        urgency: "Immediate",
        justification: "Compromised accounts could allow attackers to access critical energy infrastructure."
    },
    {
        id: 2,
        domain: "Access Control & Identity Management",
        title: "Unique User Accounts",
        standard: "ISA/IEC 62443-3-3 SR 1.1",
        question: "Does every human user have a unique account when accessing industrial control systems?",
        actions: "Review user accounts, identify shared accounts, and verify individual authentication.",
        risk: "High",
        urgency: "Immediate",
        justification: "Shared accounts make it difficult to identify who performed unauthorized actions."
    },
    {
        id: 3,
        domain: "Network & Infrastructure Security",
        title: "Network Segmentation",
        standard: "ISA/IEC 62443-3-3 SR 5.1",
        question: "Are operational technology networks separated from corporate IT networks?",
        actions: "Review network diagrams, inspect firewall rules, and verify segmentation between IT and OT environments.",
        risk: "High",
        urgency: "Immediate",
        justification: "Poor network segmentation can allow an attack on office systems to spread to industrial operations."
    },
    {
        id: 4,
        domain: "Network & Infrastructure Security",
        title: "Firewall Configuration",
        standard: "ISO/IEC 27001:2022 Annex A 8.20",
        question: "Are firewalls configured to restrict unauthorized network traffic?",
        actions: "Review firewall rules, remove unnecessary access permissions, and verify regular rule reviews.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Weak firewall configurations can expose critical systems to unauthorized access."
    },
    {
        id: 5,
        domain: "Asset & Vulnerability Management",
        title: "Asset Inventory",
        standard: "ISO/IEC 27001:2022 Annex A 5.9",
        question: "Does the organization maintain an updated inventory of hardware and software assets?",
        actions: "Review asset registers, identify unknown devices, and assign asset owners.",
        risk: "Medium",
        urgency: "1–2 Weeks",
        justification: "Unknown assets may contain security vulnerabilities that remain unnoticed."
    },
    {
        id: 6,
        domain: "Asset & Vulnerability Management",
        title: "Security Patching",
        standard: "ISO/IEC 27001:2022 Annex A 8.8",
        question: "Are technical vulnerabilities identified and addressed in a timely manner?",
        actions: "Review vulnerability reports, examine patch records, and verify remediation timelines. Assess operational safety before patching OT systems.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "Unpatched vulnerabilities can be exploited to disrupt energy production and distribution."
    },
    {
        id: 7,
        domain: "Incident Response & Business Continuity",
        title: "Incident Response Plan",
        standard: "NIST CSF 2.0 RS.MA",
        question: "Does the organization maintain and test a cybersecurity incident response plan?",
        actions: "Review the response plan, verify assigned responsibilities, and examine records of incident response exercises.",
        risk: "High",
        urgency: "1–2 Weeks",
        justification: "A delayed response to cyberattacks can increase operational damage and recovery costs."
    },
    {
        id: 8,
        domain: "Data Protection & Encryption",
        title: "Sensitive Data Encryption",
        standard: "ISO/IEC 27001:2022 Annex A 8.24",
        question: "Is sensitive company and operational information protected using appropriate cryptography?",
        actions: "Review encryption policies, inspect encryption configurations, and verify protection of sensitive data at rest and in transit.",
        risk: "Medium",
        urgency: "1–3 Months",
        justification: "Encryption reduces the risk of sensitive information being exposed if data is intercepted or accessed without authorization."
    }
];

const completedItems = new Set(
    JSON.parse(localStorage.getItem("completedAuditItems") || "[]")
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

    <h2>Outstanding Action Items</h2>

    <div id="outstanding-list"></div>
`;

const domainFilter = document.getElementById("domain-filter");
const riskFilter = document.getElementById("risk-filter");
const checklist = document.getElementById("checklist");
const outstandingList = document.getElementById("outstanding-list");

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
    renderOutstanding();
}


function renderOutstanding() {
    outstandingList.innerHTML = "";

    const priority = {
        High: 1,
        Medium: 2,
        Low: 3
    };

    const outstanding = auditItems
        .filter(item => !completedItems.has(item.id))
        .sort((a, b) => priority[a.risk] - priority[b.risk]);

    if (outstanding.length === 0) {
        outstandingList.textContent =
            "All audit items are completed!";
        return;
    }

    outstanding.forEach(item => {
        const row = document.createElement("p");

        row.textContent =
            `${item.risk} | ${item.urgency} | ${item.title}`;

        outstandingList.appendChild(row);
    });
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

// Handle domain filtering
domainFilter.addEventListener("change", event => {
    selectedDomain = event.target.value;
    renderChecklist();
});

// Handle risk filtering
riskFilter.addEventListener("change", event => {
    selectedRisk = event.target.value;
    renderChecklist();
});

// Hide or show completed items
document.getElementById("hide-button").addEventListener("click", () => {
    hideCompleted = !hideCompleted;

    document.getElementById("hide-button").textContent =
        `Hide Completed: ${hideCompleted ? "ON" : "OFF"}`;

    renderChecklist();
});

renderChecklist();

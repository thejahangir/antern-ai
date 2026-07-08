const fs = require('fs');
const path = require('path');
const files = ['Products.jsx', 'Workflow.jsx', 'Capabilities.jsx', 'Delivery.jsx', 'About.jsx', 'UseCases.jsx', 'Contact.jsx'];
const baseDir = 'src/components';

for (const f of files) {
    const filePath = path.join(baseDir, f);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/viewport=\{\{ once: true, margin: "-100px" \}\}/g, 'viewport={{ once: true, amount: 0.15 }}');
    
    // Some elements animate on y: 40 but 40px is very subtle on scroll. Let's make it y: 80 and duration slightly longer.
    content = content.replace(/initial=\{\{ opacity: 0, y: 40 \}\}/g, 'initial={{ opacity: 0, y: 80 }}');
    content = content.replace(/transition=\{\{ duration: 0.7 \}\}/g, 'transition={{ duration: 0.9, ease: "easeOut" }}');

    fs.writeFileSync(filePath, content, 'utf-8');
}

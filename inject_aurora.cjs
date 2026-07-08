const fs = require('fs');
const path = require('path');
const files = ['Workflow.jsx', 'Capabilities.jsx', 'Delivery.jsx', 'About.jsx', 'UseCases.jsx', 'Contact.jsx'];
const baseDir = 'src/components';

for (const f of files) {
    const filePath = path.join(baseDir, f);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('import Aurora')) {
        content = "import Aurora from './Aurora';\n" + content;
        content = content.replace(/(<section[^>]*>)/, "$1\n      <Aurora />");
        fs.writeFileSync(filePath, content, 'utf-8');
    }
}

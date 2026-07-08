const fs = require('fs');
const path = require('path');
const files = [
  { name: 'Products.jsx', var: 2 },
  { name: 'Workflow.jsx', var: 3 },
  { name: 'Capabilities.jsx', var: 1 },
  { name: 'Delivery.jsx', var: 2 },
  { name: 'About.jsx', var: 3 },
  { name: 'UseCases.jsx', var: 1 },
  { name: 'Contact.jsx', var: 2 }
];
const baseDir = 'src/components';

for (const f of files) {
    const filePath = path.join(baseDir, f.name);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/<Aurora \/>/g, `<Aurora variant={${f.var}} />`);
    fs.writeFileSync(filePath, content, 'utf-8');
}

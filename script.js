document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("html-editor");
    const preview = document.getElementById("preview");

    const templates = {
        basic: `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Template Básico</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>¡Hola!</h1>
                <p>Este es un template básico.</p>
            </body>
            </html>
        `,
        newsletter: `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Newsletter</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #ffffff; }
                    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Boletín Informativo</h1>
                </div>
                <p>Bienvenido a nuestro boletín mensual.</p>
            </body>
            </html>
        `,
        promotion: `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Promoción</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; }
                    .button { background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h1>Promoción Especial</h1>
                <p>¡Aprovecha esta oferta única!</p>
                <a href="#" class="button">Ver Oferta</a>
            </body>
            </html>
        `
    };

    const blocks = {
        text: `<p>Este es un bloque de texto que puedes personalizar.</p>`,
        heading: `<h2>Encabezado Personalizado</h2>`,
        button: `<a href="#" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none;">Botón</a>`,
        image: `<img src="https://via.placeholder.com/600x200" alt="Imagen de Ejemplo" />`,
        "list-bullets": `<ul><li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3</li></ul>`,
        "list-numbers": `<ol><li>Paso 1</li><li>Paso 2</li><li>Paso 3</li></ol>`,
        quote: `<blockquote>Esta es una cita destacada.</blockquote>`,
        "image-text": `
            <div style="display: flex; align-items: center;">
                <img src="https://via.placeholder.com/100" alt="Imagen" style="margin-right: 10px;" />
                <p>Texto al lado de la imagen.</p>
            </div>
        `,
        divider: `<hr style="border: 0; border-top: 2px solid #4CAF50;" />`,
        footer: `
            <footer style="background: #f4f4f4; padding: 20px; text-align: center;">
                <p>&copy; 2024 Tu Empresa. <a href="#" style="color: #4CAF50;">Desuscribirme</a></p>
            </footer>
        `
    };

    const updatePreview = () => {
        preview.contentDocument.open();
        preview.contentDocument.write(editor.value);
        preview.contentDocument.close();
    };

    document.querySelectorAll(".template-list li").forEach(item => {
        item.addEventListener("click", () => {
            const templateKey = item.getAttribute("data-template");
            editor.value = templates[templateKey];
            updatePreview();
        });
    });

    document.querySelectorAll(".block-list li").forEach(item => {
        item.addEventListener("click", () => {
            const blockKey = item.getAttribute("data-block");
            editor.value += blocks[blockKey];
            updatePreview();
        });
    });

    document.getElementById("export-html").addEventListener("click", () => {
        const blob = new Blob([editor.value], { type: "text/html" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "email-template.html";
        link.click();
    });

    document.getElementById("new-template").addEventListener("click", () => {
        editor.value = templates.basic;
        updatePreview();
    });

    editor.value = templates.basic;
    updatePreview();
});

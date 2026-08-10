const response = await fetch('https://unsplash.com/photos/x1Py2nXR-wc/download?force=true', { redirect: 'manual' });
console.log(response.status, response.headers.get('location'));

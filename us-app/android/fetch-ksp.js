const https = require('https');
https.get('https://search.maven.org/solrsearch/select?q=g:com.google.devtools.ksp+a:symbol-processing-api&rows=10&wt=json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const versions = json.response.docs.map(d => d.v);
    console.log(versions);
  });
});

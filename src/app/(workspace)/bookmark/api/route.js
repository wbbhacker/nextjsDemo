let Minio = require('minio');
export async function GET() {
    let minioClient = new Minio.Client({
        endPoint: '127.0.0.1',
        port: 9300,
        useSSL: false,
        accessKey: 'cNi2ZJ2eniJgEoZy6nHJ',
        secretKey: 'lwPK7qUrgeNMaT1mcRL3Uzu7YiZfdHuSvjlxjH2W',
    });

    const expiry = 24 * 60 * 60; // URL有效期，单位为秒
    // try {
    //     const buckets = await minioClient.listBuckets();
    //     console.log('success', buckets);
    // } catch (e) {
    //     console.log(e);
    // }

    minioClient.presignedGetObject(
        'bookmark',
        '20231023113001995.jpeg',
        expiry,
        function (e, url) {
            if (e) {
                console.log('>>>');
                return console.log(e);
            }
            console.log(url);
        }
    );
    return Response.json({ name: 'wbb' });
}

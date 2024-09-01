// utils/decryptVideo.ts
export const decryptVideo = async (blob: Blob, key: string, iv: string): Promise<Blob> => {
    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        Uint8Array.from(Buffer.from(key, 'hex')),
        { name: 'AES-CTR' },
        false,
        ['decrypt']
    );

    const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-CTR', counter: Uint8Array.from(Buffer.from(iv, 'hex')), length: 64 },
        cryptoKey,
        await blob.arrayBuffer()
    );

    return new Blob([decrypted], { type: 'video/mp4' });
};

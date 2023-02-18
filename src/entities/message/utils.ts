export const blobToUint = async (param: Blob) => {
    const buff = await new Response(param).arrayBuffer();
    return new Uint8Array(buff) as Uint8Array;
};

/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly POSTS_PER_PAGE: string;
    readonly CLOUDINARY_CLOUD_NAME: string;
    readonly XATA_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

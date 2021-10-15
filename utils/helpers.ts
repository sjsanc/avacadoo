export const slugify = (str: string): string => {
    return str.toLowerCase().replace(/\s/g, "-").replace(/\&/g, "and");
};

export const configureAvatarName = (name: string) => {
    const splits = name.split(' ');
    return `${splits[0]?.charAt(0)?.toUpperCase()}${splits[1]?.charAt(0)?.toUpperCase() ?? ''}`;
};

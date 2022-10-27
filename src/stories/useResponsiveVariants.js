import { breakpoints } from './breakpoints';

export function useResponsiveVariants(property, values) {
    let responsiveClasses = `${property}-${values[0]} `;

    values.forEach((el, i) => {
        if (i === 0) return i++;
        if (el === null) return i++;
        responsiveClasses += `${breakpoints[i]}:${property}-${el} `;
    });

    return responsiveClasses;
}

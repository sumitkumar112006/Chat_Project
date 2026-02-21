export function checkHeading(answer) {
    return /^\*\*.+\*\*$/.test((answer || '').trim());
}

export function replaceHeadingStars(answer) {
    const text = typeof answer === 'string' ? answer : String(answer ?? '');
    return text.trim().replace(/^\*\*(.+)\*\*$/, '$1');
}

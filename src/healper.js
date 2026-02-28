export function checkHeading(answer) {
    return /^\*\*.+\*\*$/.test((answer || '').trim());
}

export function replaceHeadingStars(answer) {
    const text = typeof answer === 'string' ? answer : String(answer ?? '');
    return text.trim().replace(/^\*\*(.+)\*\*$/, '$1');
}

export function parseAnswerLine(answer) {
    const text = typeof answer === 'string' ? answer.trim() : String(answer ?? '').trim();

    const boldLabelMatch = text.match(/^\*\*(.+?):\*\*\s*(.*)$/);
    if (boldLabelMatch) {
        return {
            type: 'boldLabel',
            label: boldLabelMatch[1],
            content: boldLabelMatch[2],
        };
    }

    if (/^[^*].*:\s*$/.test(text)) {
        return {
            type: 'sectionHeading',
            text: text.replace(/:\s*$/, ''),
        };
    }

    if (checkHeading(text)) {
        return {
            type: 'heading',
            text: replaceHeadingStars(text),
        };
    }

    return {
        type: 'text',
        text,
    };
}

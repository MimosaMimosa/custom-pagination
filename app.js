const paginator = (total, current) => {
    let pagination = [];
    if (total >= 8) {
        if (current < 5) {
            pagination = [
                ...[...Array(5).keys()].map((x) => x + 1),
                '...',
                total,
            ];
        } else if (current >= 5 && current + 3 < total) {
            pagination = [
                1,
                '...',
                ...Array(3)
                    .fill(current - 1)
                    .map((x, y) => x + y),
                '...',
                total,
            ];
        } else if (current + 3 >= total && current !== 5) {
            pagination = [
                1,
                '...',
                ...Array(5)
                    .fill(total - 4)
                    .map((x, y) => x + y),
            ];
        }
    } else {
        pagination = [
            ...Array(total)
                .fill(1)
                .map((x, y) => x + y),
        ];
    }

    return pagination;
};

console.log(paginator(100, 4));

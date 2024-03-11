export function Display({ count }: { count: number }) {
    console.log('React <Display count=' + count + '/> Render');
    return <p class="react">Count: {count}</p>;
}
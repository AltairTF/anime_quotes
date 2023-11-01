export async function asyncGetQuotes() {
  const res = await fetch('https://animechan.xyz/api/random');
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else if (res.status === 502) {
    return '502';
  }
}

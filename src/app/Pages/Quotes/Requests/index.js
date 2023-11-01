export async function asyncGetQuotes() {
  const res = await fetch('https://animechan.xyz/api/random');

  if (!res.ok) {
    throw new Error(res);
  }

  return res.json();
}

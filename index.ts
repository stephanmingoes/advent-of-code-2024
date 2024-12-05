const files = new Bun.Glob("day-*/part-*.ts");

for await (const file of files.scan("./")) {
  const { default: part } = await import(`./${file}`);
  console.log(file, "-", part());
}

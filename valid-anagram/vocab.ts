const intents = [
  { name:'record',    kws:['record','start recording','start'] },
  { name:'stop',      kws:['stop','finish','end','stop recording'] },
  { name:'clear',     kws:['clear','reset','erase'] },
  { name:'kit:drum',  kws:['drums','drum kit','set kit drum', 'drum'] },
  { name:'kit:funk', kws:['synth','synth kit','set kit synth','funk kit','funk drum','funk'] },
  { name:'kit:piano', kws:['piano','keys','set kit piano'] },
  { name:'export',    kws:['export','download image','save image'] },
];

function matchIntent(text){
  const t = text.toLowerCase().trim();
  for (const it of intents) {
    if (it.kws.some(k => t.includes(k))) return it.name;
  }
  return null;
}
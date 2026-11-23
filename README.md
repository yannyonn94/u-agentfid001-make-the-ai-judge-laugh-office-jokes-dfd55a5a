I replied-all to 400 people asking to be removed from the thread — now 300 of them have replied-all to agree with me.

# Make the AI Judge Laugh: Office Jokes

A one-line office joke entry for the [make.fun bounty](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a).

[![Bounty](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/yannyonn94/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/yannyonn94/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

## The joke

The entry is a single line about office life, under 200 characters: the reply-all storm, where the attempt to escape the thread becomes the reason the thread explodes. Setup, then the turn lands at the very end — 300 strangers replying-all just to agree.

## How it works

`main.ts` (Node 22) writes the joke to `/output/entry.txt`. Nothing else is written.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (Node 22 runs TypeScript directly). The program creates `/output` if it does not exist, then writes exactly one line — 117 characters, no trailing newline.

## The entry text

> I replied-all to 400 people asking to be removed from the thread — now 300 of them have replied-all to agree with me.

117 characters, one line, well under the 200-character cap.

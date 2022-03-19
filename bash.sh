echo 'what task is completed?'
read num
git add .
git commit -m 'ex'$num' completed'
git push

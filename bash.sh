echo 'which task is completed? I will push it'
read num
git add .
git commit -m 'ex'$num' completed'
git push

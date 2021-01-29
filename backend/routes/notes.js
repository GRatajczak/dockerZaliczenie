const express = require('express');
const router = express.Router();


router.post('/',(req, res) => {
	res.send('working');
})
router.delete('/',(req, res) => {
	res.send('working');
})
router.get('/:id',(req, res) => {
	res.send('working');
})
router.get('/',(req, res) => {
	res.send([
    {id: 1, title: 'Notatka nr 1', body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis <b>et quasi architecto beatae vitae</b> dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>'},
    {id: 2, title: 'Notatka nr 2', body: '<p>Sdolores eos qui ratione <b>voluptatem sequi nesciunt</b>. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>'},
  ]);
})


module.exports = router;
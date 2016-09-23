CREATE TABLE IF NOT EXISTS `questions` (
`id` int(11) NOT NULL,
  `title` tinytext NOT NULL,
  `img` mediumtext NOT NULL,
  `multipleChoice` tinyint(1) NOT NULL,
  `awnsers` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `questions`
 ADD PRIMARY KEY (`id`);


ALTER TABLE `questions`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
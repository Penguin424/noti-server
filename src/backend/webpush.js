const webpush = require('web-push');

const pr_key =  'wwuWe-aIfUChcVU6ftrvuCOXqLg-ZaPbl7PiUhkCR1M';
const pu_key = 'BGp2OAG6t6apT04SBg5f1LY6ut4TrLsZzJnPxr5qBzf7hMekbuX0iwg1-dqh93-h-qTQOV9ebwQFj1IwYzdW7rE';

webpush.setVapidDetails('mailto:dev@cosbiome.com', pu_key, pr_key);

module.exports = webpush
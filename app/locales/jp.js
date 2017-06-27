const jp = 	{
	// this variables mainly used in navigation section
	about: "Steemとは",
	explore: "探す",
	whitepaper: "SteemのWhitepaper",
	buy_steem: "Steemを買う",
	sell_steem: "Steemを売る",
	market: "マーケット",
	currency_market: "通貨市場",
	stolen_account_recovery: "盗まれたアカウントの復旧",
	change_account_password: "パスワードの変更",
	steemit_chat: "Steemitでチャット",
	steemit_api_docs: "Steemit API Docs",
	witnesses: "Witnesses",
	vote_for_witnesses: "Vote for Witnesses",
	privacy_policy: "プライバシーポリシー",
	terms_of_service: "利用規約",
	sign_up: "サインアップ",
	/* end navigation */
	buy: '買う',
	sell: '売る',
	buy_steem_power: 'Steem Powerを買う',
	transaction_history: '取引履歴',
	submit_a_story: 'ストーリーを投稿する',
	nothing_yet: 'まだなにもありません',
	close: '閉じる',
	post_promo_text: "著者やクリエイターは、あなたの投票によってSteemからリワードをえることができます。 \n もし興味深い記事や制作物を発見したら、{link}して、投票してみてください \n ${amount} Steem Powerのサインアップボーナスが得られます。 ",
	read_only_mode: 'サーバーのメンテナンスのため、読みこみ専用モードに入ります。 ご迷惑をおかけします。',
	membership_invitation_only: 'Steemit.comのメンバーは招待者のみとなっております。',
	submit_email_to_get_on_waiting_list: 'メールアドレスを提出してキャンセル待ちリストに登録しよう',
	login: 'ログイン',
	logout: 'ログアウト',
	show_less_low_value_posts: "みんなから投票されている投稿を見てみる",
	show_more_low_value_posts: "みんなから投票されていない投稿を見てみる",
	select_topic: 'トピックを選択する',
	tags_and_topics: "タグとトピック",
	filter: "フィルター",
	show_more_topics: "さらにトピックを見る",
	we_require_social_account: 'Steemitは、それぞれのアカウントに対して、{signup_bonus} Steem Powerを付与しています。; 乱用を防ぐため、ソーシャルメディアアカウントでのログインを新しいユーザーには求めています。',
	personal_info_will_be_private: 'あなたの個人情報を保存する',
	personal_info_will_be_private_link: 'プライベート',
	continue_with_facebook: 'Facebookで続ける',
	continue_with_reddit: 'Redditで続ける',
	requires_positive_karma: 'Redditの積極的なcommentやkarmaが必要',
	dont_have_facebook: 'FacebookやRedditアカウントを持っていない?',
	subscribe_to_get_sms_confirm: 'SMS確認が利用可能になったら、通知する',
	by_verifying_you_agree: 'あなたが許可するアカウントで認証',
	by_verifying_you_agree_terms_and_conditions: '規約と条件を承認',
	terms_and_conditions: '規約と条件',
	// this is from top-right dropdown menu
	hot: '今話題',
	trending: 'トレンド',
	payout_time: 'ペイアウトタイミング',
	active: 'アクティブ',
	responses: '返信',
	popular: '有名',
	/* end dropdown menu */
	loading: 'ローディング',
	cryptography_test_failed: '暗号テストが失敗',
	unable_to_log_you_in: 'このブラウザではログインができません',
	latest_browsers_do_work: '最新の{chromeLink} や {mozillaLink} バージョンは、steemit.com上でちゃんと動きます',
	account_creation_succes: 'アカウント作成に成功しました!',
	account_recovery_succes: 'アカウントの復元に成功しました!',
	password_update_succes: '{accountName} さんのアカウントは更新されました',
	password_is_bound_to_account: "This password is bound to your account\'s owner key and can not be used to login to this site. \nHowever, you can use it to {changePasswordLink} to obtain a more secure set of keys.",
	update_your_password: 'パスワードを更新',
	enter_username: 'ユーザーネームを記入',
	password_or_wif: 'Password または WIF',
	requires_auth_key: 'この処理はあなたの {authType} キーを要求します (もしくはあなたのパスワード)',
	keep_me_logged_in: 'ログインし続ける',
	// this are used mainly in "submit a story" form
	title: "タイトル",
	write_your_story: 'あなたのストーリーを投稿する',
	editor: 'エディター',
	reply: 'リプライ',
	edit: '編集する',
	delete: '削除する',
	cancel: 'キャンセル',
	clear: 'クリア',
	save: 'セーブ',
	upvote_post: '投稿をupvoteする',
	update_post: '投稿をupvoteする',
	markdown_is_supported: 'Markdownでの記入ができます',
	preview: 'プレビュー',
	// TODO do not forget to implment REQUIRED error in reply Editor
	markdown_not_supported: 'Markdownはサポートされていません',
	// markdown: 'Markdown', // this will probably be removed
	welcome_to_the_blockchain: '新しいBlockchainの世界へようこそ!',
	your_voice_is_worth_something: 'あなたの言葉はどこかの世界のだれかに必ず役に立つ',
	learn_more: 'もっと学ぶ',
	get_sp_when_sign_up: '{signupBonus} 分のSteem Powerサインアップボーナスをゲットしよう',
	all_accounts_refunded: '復元されたアカウント全てに対して払い戻されます',
	steemit_is_now_open_source: 'Steemit.comはオープンソースプロジェクトです',
	// this is mainly from ReplyEditor
	tag_your_story: '最大5つまでタグ付けができます。最初のタグはメインカテゴリーになります',
	select_a_tag: 'タグを選択する',
	required: '必須',
	shorten_title: 'タイトルを短く',
	exceeds_maximum_length: '最大 ({maxKb}KB)を超えている',
	including_the_category: "('{rootCategory}'を含む)",
	use_limited_amount_of_tags: 'You have {tagsLength} tags total{includingCategory}. 最大5つのタグを選びましょう',
	// this is mainly used in CategorySelector
	use_limitied_amount_of_categories: ' {amount}だけカテゴリを選びましょう',
	use_one_dash: 'ダッシュ（-）は一回だけ',
	use_spaces_to_separate_tags: 'スペースでタグ分け',
	use_only_allowed_characters: '小文字、英数字、ダッシュのみ',
	must_start_with_a_letter: '文字から始める',
	must_end_with_a_letter_or_number: '文字が数字で終える',
	// tags page
	tag: 'タグ',
	replies: 'リプライ',
	payouts: 'ペイアウト',
	need_password_or_key: 'プライベートパスワードまたはキーが必要',
	// BlocktradesDeposit
	change_deposit_address: '預金アドレスを変える',
	get_deposit_address: '預金アドレスをゲットする',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by',
	send_amount_of_coins_to: '{coinName} へ {value} を送る',
	amount_is_in_form: 'Amount is in the form 99999.999',
	insufficent_funds: '残高不足',
	update_estimate: '見積もりを更新する',
	get_estimate: '見積もりをする',
	memo: 'メモ',
	must_include_memo: 'メモを含む必要がある',
	estimate_using: '見積もり',
	amount_to_send: '送る総額 {estimateInputCoin}',
	deposit_using: '預金', // example: 'Steem Powerの預金' // TODO: is this example right?
	suggested_limit: 'Suggested limit {depositLimit}',
	internal_server_error: 'サーバーエラー',
	enter_amount: '総額を入れる',
	processing: 'Processing',
	broadcasted: 'Broadcasted',
	confirmed: '確認',
	remove: '削除',
	collapse_or_expand: "Collapse/Expand",
	reveal_comment: 'コメントを公開する',
	are_you_sure: '大丈夫ですか?',
	// PostFull.jsx
	by: 'by',
	in: 'in',
	share: 'シェア',
	in_reply_to: 'in reply to',
	replied_to: 'replied to',
	transfer_amount_to_steem_power: "{amount} をSTEEM POWERへ移行する",
	transfer_amount_steem_power_to: "{amount} のSTEEM POWERを移行する",
	recieve_amount_steem_power_from: "{amount} のSTEEM POWERを受け取る",
	transfer_amount_steem_power_from_to: "{from}から{amount} のSTEEM POWER を移行する",
	transfer_amount_to: " {amount} へ移行する",
	recieve_amount_from: " {amount} を受け取る",
	transfer_amount_from: "{amount} を移行する",
	stop_power_down: "Stop power down",
	start_power_down_of: "Start power down of",
	curation_reward_of_steem_power_for: '{reward} STEEM POWERのキュレーションリワード',
	author_reward_of_steem_power_for: ' {payout} オーサーリワードと {reward} STEEM POWER',
	recieve_interest_of: ' {interest}の利子を受け取る',
	// TODO find where this is used and write an example
	to: 'to',
	account_not_found: 'アカウントが見つかりません',
	this_is_wrong_password: 'これは間違ったパスワードです',
	do_you_need_to: 'あなたは必要ですか',
	recover_your_account: 'アカウントを復元する', // this probably will end with question mark
	reset_usernames_password: " {username}さんのパスワードをリセットします",
	this_will_update_usernames_authtype_key: ' {username} {authType} キーを更新します',
	the_rules_of_steemit: "ルール①: パスワードを無くさないこと<br /> ルール②: 絶対にパスワードを無くさないこと.<br /> ルール③: パスワードは復元できないということを記憶に留めておいておくこと<br />ルール④: もしも覚えておけるパスワードならば、それは安全ではないということを理解しておくこと<br /> ルール⑤: ランダムに生成されるパスワードを使うこと.<br /> ルール⑥: パスワードは誰にも言わないこと.<br /> ルール⑦: パスワードのバックアップを取っておくこと",
	account_name: 'アカウント名',
	recover_password: 'パスワードの復元',
	current_password: '現在のパスワード',
	recent_password: '最新のパスワード',
	generated_password: '生成するパスワード',
	recover_account: 'アカウントの復元',
	new: 'new', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'パスワードマネジャーやテキストファイルでパスワードのバックアップを取ろう',
	click_to_generate_password: 'パスワードを生成する',
	re_enter_generate_password: '生成されたパスワードで入室する',
	understand_that_steemit_cannot_recover_password: '私は私が無くしたパスワードをSteemitでは復元できないということに同意します',
	i_saved_password: '安全にパスワードを保存しました',
	update_password: 'パスワードの更新',
	password_must_be_characters_or_more: 'パスワードは{amount} 文字以上である必要があります',
	passwords_do_not_match: 'パスワードがマッチしません',
	you_need_private_password_or_key_not_a_public_key: 'あなたはプライベートパスワード/キーが必要です。',
	account_updated: '更新されたアカウント',
	warning: '警告',
	your_password_permissions_were_reduced: 'パスワードアクセス権限が減りました',
	if_you_did_not_make_this_change: 'この変更をしないならば',
	owhership_changed_on: '変更されたオーナー',
	deadline_for_recovery_is: '復元期限',
	i_understand_dont_show_again: "わかりました。これ以上は表示しません",
	ok: 'OK',
	convert_to_steem: 'Steemへ変換',
	steem_dollars_will_be_unavailable: 'このアクションは、今から1週間で実行されます。これらのSteem Dollarsは、すぐに利用が不可能になります。',
	amount: '総額',
	steem_dollars: 'STEEM DOLLARS',
	convert: '変換',
	invalid_amount: '無効な量',
	insufficent_balance: '残高不足',
	in_week_convert_steem_dollars_to_steem: '1週間後に、 {amount} STEEM DOLLARSが、 STEEMへ変換されます。',
	order_placed: '発注額', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'フォロー',
	unfollow: '解除',
	mute: 'ミュート',
	unmute: 'アンミュート',
	confirm_password: 'パスワード確認',
	login_to_see_memo: 'メモをみる為にログイン',
	post: '投稿', // places used: tooltip in MediumEditor
	unknown: 'Unknown', // exp.: 'unknown error'
	account_name_is_not_available: 'アカウント名は利用できません',
	type: 'Type',
	price: 'Price',
	// Market.jsx
	last_price: '終値',
	'24h_volume': '24h volume',
	bid: 'BID',
	ask: 'ASK',
	spread: 'スプレッド',
	total: 'TOTAL',
	available: 'Available',
	lowest_ask: 'Lowest ASK',
	highest_bid: 'Highest BID',
	buy_orders: '買い注文',
	sell_orders: '売り注文',
	trade_history: 'トレード履歴',
	open_orders: '見計らい注文',
	sell_amount_for_atleast: 'Sell {amount_to_sell} for at least {min_to_receive} ({effectivePrice})',
	buy_atleast_amount_for: 'Buy at least {min_to_receive} for {amount_to_sell} ({effectivePrice})',
	price_warning_above: 'This price is well above the current market price of {marketPrice}, are you sure?', //FIXME
	price_warning_below: 'This price is well below the current market price of {marketPrice}, are you sure?', //FIXME
	order_cancel_confirm: 'Cancel order {order_id} from {user}?', //FIXME
	order_cancelled: 'Order {order_id} cancelled.', //FIXME
	higher: 'Higher', // context is about prices
	lower: 'Lower', // context is about prices
	total_sd_dollars: "Total SD ($)",
	sd_dollars: "SD ($)",
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: '利用できません',
	account_name_is_not_found: 'このアカウント名は見つかりません。',
	unable_to_recover_account_not_change_ownership_recently: 'このアカウントを復元することができません。このアカウントの持ち主は最近変更されていません。',
	password_not_used_in_last_days: 'このパスワードは、少なくともここ最近30日の間はこのアカウントに使われていません。',
	request_already_submitted_contact_support: 'あなたの要望はすでに提出されており、ただいまSteemitメンバーで対応中です。状況を確認したい場合は、support@steemit.com にコンタクトをしてください。',
	recover_account_intro: "From time to time, a Steemian’s owner key may be compromised. Stolen Account Recovery gives the rightful account owner 30 days to recover their account from the moment the thief changed their owner key. Stolen Account Recovery can only be used on steemit.com if the account owner had perviously listed ‘Steemit’ as their account trustee and complied with Steemit’s Terms of Service.",
	login_with_facebook_or_reddit_media_to_verify_identity: '認証のため、FaccebookまたはRedditアカウントでログインしてください。',
	login_with_social_media_to_verify_identity: '認証のため、 {show_social_login} でログインしてください。',
	enter_email_toverify_identity: '認証する必要があります。認証を開始する為に、下記にメールアドレスを記入してください。',
	email: 'Email',
	continue_with_email: "メールアドレスで続行",
	thanks_for_submitting_request_for_account_recovery: '<p>ご要望ありがとうございます。Steemのブロックチェーンをベースとした多要素認証 (Multi Factor Authentification)を用いて、アカウントの復元を行なっています。</p> <p>できるだけ早く、お問い合わせについてご対応させていただくよう、努めさせていただきます。しかしながら、ご対応が遅れてしまうことがありますので、ご容赦ください。</p> <p>あなたの個人認証をする準備を行なっています。</p> <p>感謝を込めて,</p> <p>Ned Scott</p> <p>CEO Steemit</p>',
	recovering_account: 'アカウント復旧',
	checking_account_owner: 'アカウントオーナーの確認',
	sending_recovery_request: '復旧のリクエスト送信',
	cant_confirm_account_ownership: 'アカウントオーナーを確認できません。パスワードを確かめてください。',
	account_recovery_request_not_confirmed: "アカウント復旧のリクエストはまだ確認できていません。再度やり直してください。",
	vote: 'Vote',
	witness: 'Witness',
	top_witnesses: 'Top Witnesses',
	// user's navigational menu
	feed: 'フィード',
	wallet: 'ウォレット',
	blog: 'ブログ',
	change_password: 'パスワードの変更',
	// UserProfile
	unknown_account: '正体不明のアカウント',
	user_hasnt_made_any_posts_yet: " {name} さんはまだ投稿をしたことがないようです！",
	user_hasnt_started_bloggin_yet: "{name} さんはまだブログを始めていないようです！",
	user_hasnt_followed_anything_yet: " {name} さんはまだ誰のフォローもしていないようです！",
	user_hasnt_had_any_replies_yet: "{name} さんはまだ返信していないようです！",
	users_blog: "{name}さんのブログ",
	users_posts: "{name}さんの投稿",
	users_wallet: "{name}さんのウォレット",
	users_curation_rewards: "{name}さんのキュレーションリワード",
	users_author_rewards: "{name}さんのオーサーリワード",
	users_permissions: "{name}さんの承認",
	recent_replies_to_users_posts: "{name}さんの投稿への最近のリプライ",
	print: 'プリント',
	curation_rewards: "キュレーションリワード",
	author_rewards: 'オーサーリワード',
	feeds: 'フィード',
	rewards: 'リワード',
	permissions: '承認',
	password: 'パスワード',
	posts: '投稿',
	// english language does not need plurals, but your language might need it
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 posts}
		one {# post}
		few {# posts}
		many {# posts}
	}`,
	follower_count: `{followerCount, plural,
		=0 {no followers}
		one {1 follower}
		other {{followerCount} followers}
	}`,
	followed_count: `{followingCount, plural,
		=0 {not following anybody}
		one {1 following}
		other {{followingCount} following}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 votes}
		one {# votes}
		few {# votes}
		many {# votes}
	}`,
	response_count: `{responseCount, plural,
		zero {0 responses}
		one {# responses}
		few {# responses}
		many {# responses}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 replies}
		one {# replies}
		few {# replies}
		many {# replies}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "これは ${name}さんのレピュテーションスコアです。\n\nレピュテーションスコアは、このアカウントが獲得した投票の履歴がベースとなっています。また、低い価値のコンテンツを隠すために使われます。",
	newer: 'Newer',
	older: 'Older',
	author_rewards_last_24_hours: '24時間以内のオーサーリワード',
	daily_average_author_rewards: '1日平均のオーサーリワード',
	author_rewards_history: 'オーサーリワード履歴',
	balances: '残高',
	estimate_account_value: 'アカウントバリュー',
	next_power_down_is_scheduled_to_happen_at: '次に予定されているパワーダウン',
	transfers_are_temporary_disabled: '振替は一時的に利用できません。',
	history: '履歴',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: '24時間以内のキュレーションリワード',
	daily_average_curation_rewards: '1にち平均のキュレーションリワード',
	estimated_curation_rewards_last_week: "先週の予定されているキュレーションリワード",
	curation_rewards_last_week: "先週のキュレーションリワード",
	curation_rewards_history: 'キュレーションリワード履歴',
	// Post.jsx
	now_showing_comments_with_low_ratings: '評価が低いコメントを表示しています',
	hide: 'hide',
	show: 'Show',
	sort_order: 'Sort Order',
	comments_were_hidden_due_to_low_ratings: '評価が低いコメントは非表示になります。',
	we_will_be_unable_to_create_account_with_this_browser: 'このブラウザでは、Steemアカウントの作成ができません。',
	you_need_to_logout_before_creating_account: '異なるアカウントを作成する前に、{logoutLink} を行う必要があります。',
	steemit_can_only_register_one_account_per_verified_user: 'Steemでは、認証済みアカウントに対して、1アカウントのみ登録が可能です。',
	username: 'ユーザー名',
	couldnt_create_account_server_returned_error: "アカウント作成ができませんでした。サーバーから次のエラーが返ってきています。",
	form_requires_javascript_to_be_enabled: 'このフォームは、このブラウザでは表示ができないJavaScriptを必要としています。',
	our_records_indicate_you_already_have_account: '記録によると、あなたはすでにアカウントを持っています。',
	to_prevent_abuse_steemit_can_only_register_one_account_per_user: '迷惑行為を防ぐため、Steemitは認証済ユーザーに対して、1アカウントを登録できるようにしています。',
	you_can_either_login_or_send_us_email: ' すでにあるアカウントに{loginLink} するか、新しいアカウントを作成する',
	send_us_email: 'Emailを送る',
	connection_lost_reconnecting: '接続が切れました, 再度接続してください',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'このユーザーで、コンテンツを見るのをやめる',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: '投稿へのフラグは、リワードを取り除き、表示を減らすことを意味します。 フラグは次のような場合に使われます。',
	fraud_or_plagiarism: '詐欺行為や剽窃行為',
	hate_speech_or_internet_trolling: 'ヘイトスピーチや挑発行為',
	intentional_miss_categorized_content_or_spam: '故意の誹謗中傷やスパム',
	downvote: 'Downvote',
	pending_payout: 'ペイアウト止め',
	past_payouts: '過去のペイアウト',
	and: 'and',
	more: 'more',
	remove_vote: 'voteをやめる',
	upvote: 'upvote',
	we_will_reset_curation_rewards_for_this_post: 'この投稿のキュレーションリワードをリセットする',
	removing_your_vote: 'あなたの投票をやめる',
	changing_to_an_upvote: 'Up-Voteに変更する',
	changing_to_a_downvote: 'Down-Voteに変更する',
	confirm_flag: 'Flagを確認する',
	//  TODO
	date_created: '開始日',
	search: '検索',
	begin_recovery: "Begin Recovery",
	post_as: '投稿する', // 'Post as Misha'
	action: 'アクション',
	steem_app_center: 'Steem App Center',
	witness_thread: 'witnessのスレッド',
	you_have_votes_remaining: 'あなたは {votesCount} votesが残っています',
	you_can_vote_for_maximum_of_witnesses: '最大で30 Witnesses に投票することができます。',
	set_witness_proxy: "You can also choose a proxy that will vote for witnesses for you. This will reset your current witness selection.", // FIXME
	witness_set: "You have set a voting proxy. If you would like to reenable manual voting, please clear your proxy.", // FIXME
	witness_proxy_current: "Your current proxy is", // FIXME
	witness_proxy_set: "Set proxy", // FIXME
	witness_proxy_clear: "Clear proxy", // FIXME
	information: 'Information',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'もし、トップ50位以外のWitnessに投票したい場合、投票をする前に、アカウント名を入れてください。',
	view_the_direct_parent: 'View the direct parent',
	you_are_viewing_single_comments_thread_from: 'You are viewing a single comment&#39;s thread from',
	view_the_full_context: 'View the full context',
	this_is_a_price_feed_conversion: 'This is a price feed conversion. The 3.5 day delay is necessary to prevent abuse from gaming the price feed average',
	your_existing_SD_are_liquid_and_transferable: 'Your existing Steem Dollars are liquid and transferable.  Instead you may wish to trade Steem Dollars directly in this site under {link} or transfer to an external market.',
	buy_or_sell: '買い/売り',
//	trending_30_day: '30日間のトレンド',
	trending30: '30日間のトレンド',
	promoted: 'プロモ',
	comments: 'コメント',
	topics: 'トピックス',
	this_password_is_bound_to_your_accounts_private_key: 'This password is bound to your account\'s active key and can not be used to login to this page. You may use this active key on other more secure pages like the Wallet or Market pages.',
	potential_payout: 'ポテンシャルペイアウト',
	boost_payments: 'ブーストペイメント',
	authors: 'オーサー',
	curators: 'キュレーター',
	date: '日',
	no_responses_yet_click_to_respond: 'レスポンスがありません. クリックしてください.',
	click_to_respond: 'クリックしてください',
	new_password: '新しいパスワード',
	paste_a_youtube_or_vimeo_and_press_enter: 'YoutubeかVimeoを貼り付けて、Enterを押してください。',
	there_was_an_error_uploading_your_image: 'アップロード中の写真にエラーがありました。',
	raw_html: 'Raw HTML',
	please_remove_following_html_elements: 'あなたの投稿から次のHTML elementsを取り除いてください。: ',
	reputation: "レピュテーション",
	remember_voting_and_posting_key: "Remember voting & posting key",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: '自動ログイン?',
	yes: 'Yes',
	no: 'No',
	hide_private_key: 'プライベードキーをかくす',
	login_to_show: '表示するためのログインする',
	steemit_cannot_recover_passwords_keep_this_page_in_a_secure_location: 'Steemitは、パスワードを復旧できません。 fireproof safe や safety deposit boxのような安全な場所にこのページを保管してください',
	steemit_password_backup: 'Steemit パスワードバックアップ',
	steemit_password_backup_required: 'Steemit パスワードバックアップ (required)',
	after_printing_write_down_your_user_name: 'After printing, write down your user name',
	public: 'Public',
	private: 'Private',
	public_something_key: 'Public {key} Key',
	private_something_key: 'Private {key} Key',
	posting_key_is_required_it_should_be_different: 'The posting key is used for posting and voting. It should be different from the active and owner keys.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'The active key is used to make transfers and place orders in the internal market.',
	the_owner_key_is_required_to_change_other_keys: 'The owner key is the master key for the account and is required to change the other keys.',
	the_private_key_or_password_should_be_kept_offline: 'The private key or password for the owner key should be kept offline as much as possible.',
	the_memo_key_is_used_to_create_and_read_memos: 'The memo key is used to create and read memos.',
	previous: '前へ',
	next: '次',
	browse: 'ブラウザ',
	not_valid_email: '利用不可能なメールアドレス',
	thank_you_for_being_an_early_visitor_to_steemit: 'Thank you for being an early visitor to Steemit. We will get back to you at the earliest possible opportunity.',
	estimated_author_rewards_last_week: "予定されている、先週のオーサーリワード",
	author_rewards_last_week: "先週のオーサーリワード",
	confirm: 'Confirm',
	confirm_follow: 'Are you sure you want to follow this user?',
	confirm_unfollow: 'Are you sure you want to unfollow this user?',
	confirm_ignore: 'Are you sure you want to block this user?',
	confirm_unignore: 'Are you sure you want to unblock this user?',
	canceled: 'Canceled',
	asset: "Asset",
	this_memo_is_private: 'このメモはPrivateです。',
	this_memo_is_public: 'このメモはPublicです。',
	power_up: 'パワーアップ',
	transfer: '振替',
	basic: 'Basic',
	advanced: 'Advanced',
	convert_to_steem_power: 'Steem Powerへ変換',
	transfer_to_account: 'アカウントへ振替',
	buy_steem_or_steem_power: 'Steem または Steem Powerを購入する',
	version: 'バージョン',
	about_steemit: 'Steemitについて',
	steemit_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: 'Steemitは、クリエイターやキュレーターが価値を生み出すことで、リワードが得られるソーシャルメディアプラットフォームです。',
	steemit_is_a_social_media_platform_where_everyone_gets_paid: 'Steemitは、クリエイターやキュレーターが価値を生み出すことで、リワードが得られるソーシャルメディアプラットフォームです。Steemと呼ばれる強固なデジタルポイントシステムを活用し、市場における価格発見と流動性を通して、デジタルリワードによって本来の価値を支えます。',
	learn_more_at_steem_io: 'Learn more at steem.io',
	resources: 'Resources',
	steem_whitepaper: 'Steem Whitepaper',
	join_our_slack: 'Join our Slack',
	steemit_support: 'Steemit Support',
	please_email_questions_to: '質問を送ってください。',
	sorry_your_reddit_account_doesnt_have_enough_karma: "申し訳ありません。あなたのRedditアカウントは、サインアップをする為に、十分なReddit Karmaがありません。登録待ちリストにメールアドレスを追加してください。",
	register_with_facebook: 'Facebookで登録',
	or_click_the_button_below_to_register_with_facebook: 'または、Facebookで登録する為に次のボタンをクリックする',
	trending_24_hour: '24時間以内のトレンド',
	home: 'home',
	'24_hour': '24時間',
	'30_day': '30日',
	flag: "フラグ",
  use_caution_sending_to_this_account: 'Use caution sending to this account. Please double check your spelling for possible phishing. ',

  phone: 'Phone',
  golos_account: 'GOLOS account',
  didnt_recieve_email: "Didn't recieve email?",
  please_provide_your_phone_number_to_continue: "Please provide your phone number to continue the registration process",
  phone_verification_helps_with_preventing_spam: "Phone verification helps with preventing spam and allows " + APP_NAME + " to assist with Account Recovery in case your account is ever compromised. Your phone number will not be used for any other purpose other than phone verification and account recovery.",
  country_code: "Country Code",
  phone_number: "Phone number",
  examples: "Examples: 541-754-3010 | 89-636-48018",
  land_lines_cannot_receive_sms_messages: "* Land lines cannot receive SMS messages",
  message_and_data_rates_may_apply: "* Message and data rates may apply",
  thank_you_for_providing_your_phone_number: "Thank you for providing your phone number ({phone}).",
  to_continue_please_enter_the_sms_code_weve_sent_you: "To continue please enter the SMS code we've sent you.",
  confirmation_code: "Confirmation code",
  didnt_receive_the_verification_code: "Didn't receive the verification code? ",
  re_send: "Re-send",
}

export { jp }

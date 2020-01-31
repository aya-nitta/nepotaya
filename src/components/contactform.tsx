import React, { FC } from 'react'

const ContactForm: FC = () => (
  <>
    <h2>お問い合わせフォーム</h2>
    <form>
      <div>
        <div>
          <p>お問い合わせ項目</p>
          <p>必須</p>
        </div>
        <div>
          <input type="radio" name="aradio" value="A" />
          <label>商品について</label>
          <input type="radio" name="bradio" value="B" />
          <label>採用について</label>
          <input type="radio" name="cradio" value="C" />
          <label>その他</label>
        </div>
      </div>
      <hr />

      <div>
        <div>
          <p>お問い合わせ内容</p>
          <p>必須</p>
        </div>
        <p>
          <textarea />
        </p>
      </div>
      <hr />

      <div>
        <div>
          <p>お名前</p>
          <p>必須</p>
        </div>
        <div>
          <p>
            姓<input type="text" />
          </p>
          <p>
            名<input type="text" />
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <p>フリガナ</p>
          <p>必須</p>
        </div>
        <div>
          <p>
            セイ
            <input type="text" />
          </p>
          <p>
            メイ
            <input type="text" />
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <div>
            <p>メールアドレス</p>
            <p>必須</p>
          </div>
        </div>
        <p>
          <input type="text" />
        </p>
      </div>
      <hr />

      <div>
        <div>
          <p>返信不要欄</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>
            返信不要 <span>※返信が不要な場合はチェックしてください）</span>
          </p>
        </div>
      </div>
    </form>
  </>
)

export default ContactForm

class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :link, index: true, null: false
      t.string :audio_link
      t.integer :start_time
      t.integer :end_time
      t.timestamps
    end
  end
end

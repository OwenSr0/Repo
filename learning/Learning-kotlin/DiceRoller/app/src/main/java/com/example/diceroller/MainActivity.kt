package com.example.diceroller


import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        class Dice(val numSides: Int) {

            fun roll(): Int {
                return (1..numSides).random()
            }
        }

        fun main() {
            val myFirstDice = Dice(6)
            val rollResult = myFirstDice.roll()
            val diceImage: ImageView = findViewById(R.id.imageView)
            val resultTextView: TextView = findViewById(R.id.textView)
            resultTextView.text = rollResult.toString()

            val drawableResource = when (rollResult) {
                1 -> R.drawable.dice_1
                2 -> R.drawable.dice_2
                3 -> R.drawable.dice_3
                4 -> R.drawable.dice_4
                5 -> R.drawable.dice_5
                else -> R.drawable.dice_6
            }

            diceImage.setImageResource(drawableResource)
            diceImage.contentDescription = rollResult.toString()

        }

        val rollButton: Button = findViewById(R.id.button)
        rollButton.setOnClickListener { main() }

    }


}





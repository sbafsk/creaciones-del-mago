"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface ProductOptionsProps {
  options: Record<string, string[]>
  selectedOptions: Record<string, string>
  onOptionsChange: (options: Record<string, string>) => void
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export function ProductOptions({
  options,
  selectedOptions,
  onOptionsChange,
  quantity,
  onQuantityChange,
}: ProductOptionsProps) {
  const updateOption = (key: string, value: string) => {
    onOptionsChange({ ...selectedOptions, [key]: value })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1)
  }

  return (
    <div className="space-y-6 mb-6">
      {/* Dynamic Options */}
      {Object.entries(options).map(([key, values]) => (
        <div key={key}>
          <Label className="text-sm font-medium mb-2 block capitalize">{key}</Label>
          <Select value={selectedOptions[key] || ""} onValueChange={(value) => updateOption(key, value)}>
            <SelectTrigger>
              <SelectValue placeholder={`Seleccionar ${key.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {values.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      {/* Quantity */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Cantidad</Label>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={decreaseQuantity} disabled={quantity <= 1}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button variant="outline" size="sm" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
